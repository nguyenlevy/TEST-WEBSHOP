import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../../../product/models/product.model';
import { Router } from '@angular/router';
import { OrderService } from '../../../../order/services/order.service';
import { CustomerService } from '../../../../customer/services/customer.service';
import { SelectItem } from 'primeng/api';
import { CustomerModel } from '../../../../customer/models/customer.model';
import { TranslateService } from '../../../../shared/services/translate.service';
import {
  OrderDtoModel,
  OrderModel,
  OrderType,
} from '../../../../order/models/order.model';
import { ProductService } from '../../../../product/services/product.service';
import { EmployeeService } from '../../../../order/services/employee.service';
import { EmployeeModel } from '../../../../order/models/employee.model';
import { Configuration } from '../../../../shared/helper/constants';
import {
  CodeModel,
  JsonResultModel,
} from '../../../../shared/models/json-result.model';
import { PaymentMethodService } from '../../../../order/services/payment-method.service';
import { PaymentMethodModel } from '../../../../order/models/payment-method.model';
import { ProductDataService } from '../../../../shared/services/product-data.service';

declare function Notify(message, status): any;

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormOrderComponent implements OnInit {
  formOrder: FormGroup;
  submitted = false;
  customersOption: SelectItem[] = [];
  sellerOptions: SelectItem[] = [];
  productOptions: SelectItem[] = [];
  paymentMethodOptions: SelectItem[] = [];
  selectedProductId: number;
  langDisplay: any;
  langDisplayProduct: any;
  langDisplayButton: any;
  OrderType = OrderType;
  products: ProductModel[] = [];
  selectedProductList: ProductModel[] = [];
  colProducts: any[];
  isLoading = true;
  langDisplayMessage: any;
  minLengthToShowScroll = 11;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private translateService: TranslateService,
    private employeeService: EmployeeService,
    private productService: ProductService,
    private paymentMethodService: PaymentMethodService,
    private data: ProductDataService
  ) {
    this.translateService
      .get(['ORDER', 'PRODUCT', 'BUTTONS', 'NOTIFICATION'])
      .then((res: any) => {
        if (res) {
          this.langDisplay = res.ORDER;
          this.langDisplayProduct = res.PRODUCT;
          this.langDisplayButton = res.BUTTONS;
          this.langDisplayMessage = res.NOTIFICATION;
        }
      });
  }

  get f() {
    return this.formOrder.controls;
  }

  ngOnInit() {
    this.initFormOrder(null);
    this.isLoading = false;
    this.getCustomerOptions();
    this.getEmployeeOptions();
    this.getProductOptions();
    this.initProductColumns();
    this.initOptions();
    this.data.currentProduct.subscribe((selectedProduct) => {
      if (selectedProduct) {
        this.addProductToList(selectedProduct.id);
      }
    });
  }

  initOptions() {
    this.getPaymentMethodOptions();
    this.setPriceForSelectedProducts();
  }

  initFormOrder(orderModel: OrderModel) {
    this.selectedProductList = [];
    this.formOrder = this.formBuilder.group({
      orderCode: orderModel ? orderModel.orderCode : '',
      customerId: [
        orderModel ? orderModel.customerId : null,
        Validators.required,
      ],
      saleDateUtc: orderModel ? new Date(orderModel.saleDate) : null,
      sellerId: orderModel ? orderModel.sellerId : null,
      orderNote:
        orderModel && orderModel.orderNote ? orderModel.orderNote.note : '',
      paymentMethodId: orderModel ? orderModel.paymentMethodId : null,
      orderPrice: 0,
      orderDiscount: orderModel ? orderModel.orderDiscount : 0,
      orderTotal: orderModel ? orderModel.orderTotal : 0,
      orderPaid: orderModel ? orderModel.orderPaid : 0,
      orderDebt: orderModel ? orderModel.orderDebt : 0,
      products: null,
    });
  }

  getPaymentMethodOptions() {
    this.paymentMethodService
      .get()
      .subscribe((paymentMethods: PaymentMethodModel[]) => {
        this.paymentMethodOptions = paymentMethods.map((c) => {
          return {
            label: c.name,
            value: c.id,
          };
        });
      });
  }

  getCustomerOptions() {
    this.customerService
      .get(null, null)
      .subscribe((customers: CustomerModel[]) => {
        this.customersOption = customers.map((c) => {
          return {
            label: `${c.customerCode} - ${c.name}`,
            value: c.id,
          };
        });
      });
  }

  getPlaceholderForCustomerOption() {
    return this.langDisplay && this.langDisplay.FIND_CUSTOMER
      ? this.langDisplay.FIND_CUSTOMER
      : 'Chọn Khách hàng';
  }

  getEmployeeOptions() {
    this.employeeService.get().subscribe((employees: EmployeeModel[]) => {
      this.sellerOptions = employees.map((c) => {
        return {
          label: c.name,
          value: c.id,
        };
      });
    });
  }

  getProductOptions() {
    this.productService.get().subscribe((data: ProductModel[]) => {
      this.products = data;
      this.productOptions = data.map((p) => {
        return {
          label: p.name,
          value: p.id,
        };
      });
    });
  }

  onSubmit(orderType) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formOrder.invalid || this.selectedProductList.length === 0) {
      return;
    }
    this.f.products.setValue(this.selectedProductList);
    const data = new OrderDtoModel().fromJson(this.formOrder.value);
    data.paymentMethodId = this.f.paymentMethodId.value;
    data.orderTotal = Number(this.f.orderTotal.value);
    data.orderDiscount = Number(this.f.orderDiscount.value);
    data.orderPaid = Number(this.f.orderPaid.value);
    data.orderDebt = Number(this.f.orderDebt.value);
    data.orderType = orderType;
    this.createData(data);
  }

  close() {
    this.initFormOrder(null);
    this.submitted = false;
  }

  initProductColumns() {
    this.colProducts = [
      {
        field: 'order',
        header:
          this.langDisplayProduct && this.langDisplayProduct.ORDER
            ? this.langDisplayProduct.ORDER
            : 'STT',
        width: '5%',
        sort: false,
      },
      {
        field: 'name',
        header:
          this.langDisplayProduct && this.langDisplayProduct.NAME
            ? this.langDisplayProduct.NAME
            : 'Hàng hóa',
        width: '40%',
        sort: true,
      },
      {
        field: 'amount',
        header:
          this.langDisplayProduct && this.langDisplayProduct.AMOUNT
            ? this.langDisplayProduct.AMOUNT
            : 'Số lượng',
        width: '10%',
        sort: true,
      },
      {
        field: 'price',
        header:
          this.langDisplayProduct && this.langDisplayProduct.UNIT_PRICE
            ? this.langDisplayProduct.UNIT_PRICE
            : 'Đơn giá',
        width: '15%',
        sort: false,
      },
      {
        field: 'intoMoney',
        header:
          this.langDisplayProduct && this.langDisplayProduct.INTO_MONEY
            ? this.langDisplayProduct.INTO_MONEY
            : 'Thành tiền',
        width: '15%',
        sort: false,
      },
      {
        field: 'actionDelete',
        header: '',
      },
    ];
  }

  onSelectProduct() {
    this.addProductToList(this.selectedProductId);
  }

  addProductToList(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      if (!this.selectedProductList.some((p) => p.id === productId)) {
        product.amount = 1;
        product.intoMoney = product.amount * product.price;
        this.selectedProductList.push(product);
      } else {
        product.amount += 1;
        product.intoMoney = product.amount * product.price;
      }
      this.setPriceForSelectedProducts();
    }
  }

  deleteProductFromList(productId: number) {
    const productIndex = this.selectedProductList.findIndex(
      (p) => p.id === productId
    );
    if (productIndex > -1) {
      this.selectedProductList.splice(productIndex, 1);
      this.setPriceForSelectedProducts();
    }
  }

  createData(data: OrderDtoModel) {
    this.orderService
      .create(data)
      .subscribe((resCreateSale: JsonResultModel) => {
        if (resCreateSale.code === CodeModel.Success) {
          Notify(
            this.langDisplayMessage && this.langDisplayMessage.ADD_SUCCESS
              ? this.langDisplayMessage.ADD_SUCCESS
              : 'Thêm thành công',
            Configuration.NotificationType.Success
          );
          this.initFormOrder(null);
          this.submitted = false;
          this.router.navigate(['app/pos']);
        } else {
          Notify(
            this.langDisplayMessage && this.langDisplayMessage.ADD_FAIL
              ? this.langDisplayMessage.ADD_FAIL
              : 'Tạo thất bại',
            Configuration.NotificationType.Error
          );
        }
      });
  }

  setPriceForSelectedProducts() {
    const price = this.selectedProductList.reduce(
      (accumulator, selectedProduct) => {
        return (
          accumulator +
          (selectedProduct.price
            ? selectedProduct.price * selectedProduct.amount
            : 0)
        );
      },
      0
    );
    this.f.orderPrice.setValue(price);
    const total = price;
    this.f.orderTotal.setValue(total);
  }

  calTotalDebt() {
    this.f.orderDebt.setValue(this.f.orderTotal.value - this.f.orderPaid.value);
  }
}
