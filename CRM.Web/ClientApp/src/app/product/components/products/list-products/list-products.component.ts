import { Component, OnInit } from '@angular/core';
import { ConfirmationService, DialogService, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { Configuration } from '../../../../shared/helper/constants';
import { TranslateService } from '../../../../shared/services/translate.service';
import { ExportService } from '../../../../shared/services/export.service';
import { ProductService } from '../../../services/product.service';
import { zip } from 'rxjs/internal/observable/zip';
import Utils from '../../../../shared/helper/utility';
import { Title } from '@angular/platform-browser';
import { ProductCategoryService } from '../../../../management/services/product-category.service';

declare function Notify(message, status): any;

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  mainItems: ProductModel[] = [];
  cols: any[];
  colsAction: any[];
  amountToDisplay: number;
  total: number;
  start: number;
  end: number;
  langDisplay: any;
  langDisplayButton: any;
  langDisplayMessage: any;
  optionPageSizes = Configuration.optionPageSizes;
  productCategoryOptions: SelectItem[] = [];
  productManufacturerOptions: SelectItem[] = [];
  productStatusOptions: SelectItem[] = [];
  selectedProductCategory: SelectItem;
  selectedProductManufacturer: SelectItem;
  selectedProductStatus: SelectItem;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private exportService: ExportService,
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,

    private titleService: Title
  ) {
    this.langDisplay = this.translateService
      .get(['TAB_TITLE', 'PRODUCT', 'BUTTONS', 'NOTIFICATION'])
      .then((res: any) => {
        if (res) {
          titleService.setTitle(res.TAB_TITLE.PRODUCT);
          this.langDisplay = res.PRODUCT;
          this.langDisplayButton = res.BUTTONS;
          this.langDisplayMessage = res.NOTIFICATION;
        }
      });
  }

  ngOnInit() {
    this.initColumns();
    this.amountToDisplay = Configuration.defaultPageSize;
    this.start = 1;
    this.getList();
    this.initProductDropDowns();
  }

  initColumns() {
    this.cols = [
      {
        field: 'order',
        header:
          this.langDisplay && this.langDisplay.ORDER
            ? this.langDisplay.ORDER
            : 'STT',
        width: '5%',
        sort: false,
      },
      {
        field: 'name',
        header:
          this.langDisplay && this.langDisplay.NAME
            ? this.langDisplay.NAME
            : 'Hàng hóa',
        width: '20%',
        sort: true,
        filterMatchMode: 'contains',
      },
      {
        field: 'productCode',
        header:
          this.langDisplay && this.langDisplay.PRODUCT_CODE
            ? this.langDisplay.PRODUCT_CODE
            : 'Mã hàng hóa',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains',
      },
      {
        field: 'amount',
        header:
          this.langDisplay && this.langDisplay.AMOUNT
            ? this.langDisplay.AMOUNT
            : 'Số lượng',
        width: '10%',
        sort: true,
      },
      {
        field: 'price',
        header:
          this.langDisplay && this.langDisplay.PRICE
            ? this.langDisplay.PRICE
            : 'Giá bán',
        width: '10%',
        sort: true,
      },
      {
        field: 'productCategoryName',
        header:
          this.langDisplay && this.langDisplay.PRODUCT_CATEGORY
            ? this.langDisplay.PRODUCT_CATEGORY
            : 'Nhóm hàng',
        width: '10%',
        sort: true,
      },
      {
        field: 'productManufacturerName',
        header:
          this.langDisplay && this.langDisplay.PRODUCT_MANUFACTURER
            ? this.langDisplay.PRODUCT_MANUFACTURER
            : 'Nhà sản xuất',
        width: '10%',
        sort: true,
      },
      {
        field: 'productStatusName',
        header:
          this.langDisplay && this.langDisplay.PRODUCT_STATUS
            ? this.langDisplay.PRODUCT_STATUS
            : 'Tình trạng',
        width: '10%',
        sort: true,
      },
    ];
    this.colsAction = [
      {
        field: 'actionEdit',
        header:
          this.langDisplayButton && this.langDisplayButton.EDIT
            ? this.langDisplayButton.EDIT
            : 'Sửa',
        width: '5%',
      },
      {
        field: 'actionDelete',
        header:
          this.langDisplayButton && this.langDisplayButton.DELETE
            ? this.langDisplayButton.DELETE
            : 'Xoá',
        width: '5%',
        sort: false,
      },
    ];
  }

  changeAmount() {
    if (this.amountToDisplay > this.total) {
      this.end = this.total;
    } else {
      this.start = 1;
      this.end = this.amountToDisplay;
    }
  }

  paginate(event) {
    this.start = event.first + 1;
    if (event.first === 0) {
      this.end = this.amountToDisplay;
    } else if (event.first + event.rows > this.total) {
      this.end = this.total;
    } else {
      this.end = event.first + event.rows;
    }
  }

  getList() {
    this.productService.get().subscribe((responseResult: any) => {
      if (responseResult) {
        this.mainItems = responseResult;
        this.mainItems.forEach((x, index) => {
          x.order = index + 1;
        });
        this.total = this.mainItems.length;
        if (+this.mainItems.length > +this.amountToDisplay) {
          this.end = this.amountToDisplay;
        } else {
          this.end = this.total;
        }
      }
    });
  }

  initProductDropDowns() {
    zip(
      this.productCategoryService.get(),
      this.productService.getProductManufacturers(),
      this.productService.getProductStatuses()
    ).subscribe(
      ([productCategories, productManufacturers, productStatuses]) => {
        this.productCategoryOptions = Utils.parseListDataToOptions(
          productCategories
        );
        this.productManufacturerOptions = Utils.parseListDataToOptions(
          productManufacturers
        );
        this.productStatusOptions = Utils.parseListDataToOptions(
          productStatuses
        );
      }
    );
  }

  addNew() {
    this.router.navigate(['app/products/add']);
  }

  edit(id: number) {
    this.router.navigate(['app/products/edit'], {
      queryParams: {
        productId: id,
      },
    });
  }

  delete(id) {
    this.confirmationService.confirm({
      message:
        this.langDisplayMessage &&
        this.langDisplayMessage.CONFIRM_DELETE_MESSAGE
          ? this.langDisplayMessage.CONFIRM_DELETE_MESSAGE
          : 'Bạn chắc chắn muốn xóa dòng này?',
      header:
        this.langDisplayMessage && this.langDisplayMessage.CONFIRM_TITLE
          ? this.langDisplayMessage.CONFIRM_TITLE
          : 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.delete(id).subscribe(
          (responseResult: boolean) => {
            if (responseResult) {
              this.getList();
              Notify(
                this.langDisplayMessage &&
                  this.langDisplayMessage.DELETE_SUCCESS
                  ? this.langDisplayMessage.DELETE_SUCCESS
                  : 'Xóa thành công',
                Configuration.NotificationType.Success
              );
            } else {
              Notify(
                this.langDisplayMessage && this.langDisplayMessage.DELETE_FAIL
                  ? this.langDisplayMessage.DELETE_FAIL
                  : 'Xóa thất bại',
                Configuration.NotificationType.Error
              );
            }
          },
          (error) => {
            Notify(
              this.langDisplayMessage && this.langDisplayMessage.DELETE_FAIL
                ? this.langDisplayMessage.DELETE_FAIL
                : 'Xóa thất bại',
              Configuration.NotificationType.Error
            );
          }
        );
      },
    });
  }

  exportPdf() {
    this.exportService.exportPdf(this.getExportColumns(), this.mainItems);
  }

  exportExcel() {
    this.exportService.exportExcel(this.getExportData());
  }

  getExportData() {
    return this.mainItems.map((json) => {
      return new ProductModel().exportData(json);
    });
  }

  getExportColumns() {
    return this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
}
