import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../../../product/models/product.model';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { CustomerService } from '../../../../customer/services/customer.service';
import { SelectItem } from 'primeng/api';
import { CustomerModel } from '../../../../customer/models/customer.model';
import { TranslateService } from '../../../../shared/services/translate.service';
import {
  OrderDtoModel,
  OrderModel,
  OrderType,
} from '../../../models/order.model';
import { CarrierService } from '../../../services/carrier.service';
import { CarrierModel } from '../../../models/carrier.model';
import { ProductService } from '../../../../product/services/product.service';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../models/employee.model';
import { Configuration } from '../../../../shared/helper/constants';
import {
  CodeModel,
  JsonResultModel,
} from '../../../../shared/models/json-result.model';
import { PaymentMethodService } from '../../../services/payment-method.service';
import { PaymentMethodModel } from '../../../models/payment-method.model';
import {SupplierService} from '../../../../customer/services/supplier.service';
import {SupplierModel} from '../../../../customer/models/supplier.model';

declare function Notify(message, status): any;

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() orderType: OrderType;
  @Input() orderId: number;
  formOrder: FormGroup;
  submitted = false;
  customersOption: SelectItem[] = [];
  sellerOptions: SelectItem[] = [];
  carrierOptions: SelectItem[] = [];
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
  isShowProductsNotAvailable = false;
  messageProductsNotAvailable = '';
  isLoading = true;
  langDisplayMessage: any;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private supplierService: SupplierService,
    private translateService: TranslateService,
    private employeeService: EmployeeService,
    private carrierService: CarrierService,
    private productService: ProductService,
    private paymentMethodService: PaymentMethodService
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
    if (this.orderId && this.orderId !== 0) {
      this.orderService.get(this.orderId).subscribe((orders: OrderModel[]) => {
        if (orders && orders.length > 0) {
          const orderFound = orders[0];
          this.initFormOrder(orderFound);
          this.isLoading = false;
        }
      });
    } else {
      this.initFormOrder(null);
      this.isLoading = false;
    }
    this.getCustomerOptions();
    this.getEmployeeOptions();
    this.getProductOptions();
    this.initProductColumns();
  }

  initFormOrder(orderModel: OrderModel) {
    if (orderModel && orderModel.orderItems.length > 0) {
      this.selectedProductList = orderModel.orderItems.map((o) => {
        o.product.amount = o.amount;
        return o.product;
      });
    }
    switch (this.orderType) {
      case OrderType.Order:
        this.formOrder = this.formBuilder.group({
          orderCode: orderModel ? orderModel.orderCode : '',
          customerId: [
            orderModel ? orderModel.customerId : null,
            Validators.required,
          ],
          saleDateUtc:
            orderModel && orderModel.saleDate
              ? new Date(orderModel.saleDate)
              : null,
          sellerId: orderModel ? orderModel.sellerId : null,
          orderNote:
            orderModel && orderModel.orderNote ? orderModel.orderNote.note : '',
          carrierId: [
            orderModel && orderModel.shipment
              ? orderModel.shipment.carrierId
              : null,
            Validators.required,
          ],
          deliveryDate:
            orderModel &&
            orderModel.shipment &&
            orderModel.shipment.deliveryDateUtc
              ? new Date(orderModel.shipment.deliveryDateUtc)
              : null,
          shipper:
            orderModel && orderModel.shipment
              ? orderModel.shipment.shipper
              : '',
          shipmentNote:
            orderModel && orderModel.shipment ? orderModel.shipment.note : '',
          products: null,
          orderType: this.orderType,
          orderPrice: 0,
          orderDiscount: 0,
          orderTotal: 0,
          orderPaid: 0,
          orderDebt: 0,
        });
        this.getCarriers();
        break;
      case OrderType.Sale:
      case OrderType.ReturnSupplier:
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
          orderType: this.orderType,
          orderPrice: 0,
          orderDiscount: orderModel ? orderModel.orderDiscount : 0,
          orderTotal: orderModel ? orderModel.orderTotal : 0,
          orderPaid: orderModel ? orderModel.orderPaid : 0,
          orderDebt: orderModel ? orderModel.orderDebt : 0,
          products: null,
        });
        this.getPaymentMethodOptions();
        this.setPriceForSelectedProducts();
        break;
    }
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
    switch (this.orderType) {
      case OrderType.ReturnSupplier:
        this.supplierService
        .get(null, null)
        .subscribe((customers: SupplierModel[]) => {
          this.customersOption = customers.map((c) => {
            return {
              label: `${c.customerCode} - ${c.name}`,
              value: c.id,
            };
          });
        });
        break;
       case OrderType.Sale:
       case OrderType.Order:
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
          break;
      default:
        break;
    }
  }

  getPlaceholderForCustomerOption() {
    if (this.orderType === OrderType.ReturnSupplier) {
      return this.langDisplay && this.langDisplay.FIND_SUPPLIER ? this.langDisplay.FIND_SUPPLIER : 'Chọn NCC';
    } else if(this.orderType === OrderType.Sale || this.orderType === OrderType.Order) {
      return this.langDisplay && this.langDisplay.FIND_CUSTOMER ? this.langDisplay.FIND_CUSTOMER : 'Chọn Khách hàng';
    }
  }

  getMessageForRequiredCustomer() {
    if (this.orderType === OrderType.ReturnSupplier) {
      return this.langDisplay && this.langDisplay.SUPPLIER_REQUIRED ? this.langDisplay.SUPPLIER_REQUIRED : 'NCC không được bỏ trống';
    } else if(this.orderType === OrderType.Sale || this.orderType === OrderType.Order) {
      return this.langDisplay && this.langDisplay.CUSTOMER_REQUIRED ? this.langDisplay.CUSTOMER_REQUIRED : 'Khách hàng không được bỏ trống';
    }
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

  getCarriers() {
    this.carrierService.get().subscribe((carrierModels: CarrierModel[]) => {
      this.carrierOptions = carrierModels.map((c) => {
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formOrder.invalid || this.selectedProductList.length === 0) {
      return;
    }
    this.f.products.setValue(this.selectedProductList);
    const data = new OrderDtoModel().fromJson(this.formOrder.value);
    if (this.orderType === OrderType.Sale) {
      data.paymentMethodId = this.f.paymentMethodId.value;
    }
    data.orderTotal = Number(this.f.orderTotal.value);
    data.orderDiscount = Number(this.f.orderDiscount.value);
    data.orderPaid = Number(this.f.orderPaid.value);
    data.orderDebt = Number(this.f.orderDebt.value);
    if (this.orderId && this.orderId !== 0) {
      this.updateData(data);
    } else {
      this.createData(data);
    }
    this.isShowProductsNotAvailable = false;
    this.messageProductsNotAvailable = '';
    // this.productService.checkProductsAvailability(data.products).subscribe((resProduct: JsonResultModel) => {
    //   if (resProduct.code === CodeModel.Success) {
    //     if (this.orderId && this.orderId !== 0) {
    //       this.updateData(data);
    //     } else {
    //       this.createData(data);
    //     }
    //     this.isShowProductsNotAvailable = false;
    //     this.messageProductsNotAvailable = '';
    //   } else {
    //     this.isShowProductsNotAvailable = true;
    //     this.messageProductsNotAvailable = resProduct.message;
    //   }
    // });
  }

  close() {
    this.router.navigate(['app/orders']);
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
        field: 'productCode',
        header:
          this.langDisplayProduct && this.langDisplayProduct.PRODUCT_CODE
            ? this.langDisplayProduct.PRODUCT_CODE
            : 'Mã hàng hóa',
        width: '20%',
        sort: true,
      },
      {
        field: 'name',
        header:
          this.langDisplayProduct && this.langDisplayProduct.NAME
            ? this.langDisplayProduct.NAME
            : 'Hàng hóa',
        width: '25%',
        sort: true,
      },
      {
        field: 'amount',
        header:
          this.langDisplayProduct && this.langDisplayProduct.AMOUNT
            ? this.langDisplayProduct.AMOUNT
            : 'Số lượng',
        width: '15%',
        sort: true,
      },
      {
        field: 'cost',
        header:
          this.langDisplayProduct && this.langDisplayProduct.COST
            ? this.langDisplayProduct.COST
            : 'Giá vốn',
        width: '15%',
        sort: false,
      },
      {
        field: 'price',
        header:
          this.langDisplayProduct && this.langDisplayProduct.PRICE
            ? this.langDisplayProduct.PRICE
            : 'Giá bán',
        width: '15%',
        sort: true,
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
    if (!this.selectedProductList.some((p) => p.id === productId)) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        product.amount = 1;
        this.selectedProductList.push(product);
        this.setPriceForSelectedProducts();
      }
    } else {
      Notify(
        this.langDisplay && this.langDisplay.PRODUCT_DUPLICATED
          ? this.langDisplay.PRODUCT_DUPLICATED
          : 'Hàng hóa này đã được chọn',
        Configuration.NotificationType.Error
      );
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
          this.router.navigate(['app/orders']);
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

  updateData(data: OrderDtoModel) {
    this.orderService
      .update(this.orderId, data)
      .subscribe((resUpdateOrder: JsonResultModel) => {
        if (resUpdateOrder.code === CodeModel.Success) {
          Notify(
            this.langDisplayMessage && this.langDisplayMessage.UPDATE_SUCCESS
              ? this.langDisplayMessage.UPDATE_SUCCESS
              : 'Cập nhật thành công',
            Configuration.NotificationType.Success
          );
          this.router.navigate(['app/orders']);
        } else {
          Notify(
            this.langDisplayMessage && this.langDisplayMessage.UPDATE_FAIL
              ? this.langDisplayMessage.UPDATE_FAIL
              : 'Cập nhật thất bại',
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
