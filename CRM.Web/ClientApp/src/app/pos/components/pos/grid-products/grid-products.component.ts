import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductModel } from '../../../../product/models/product.model';
import { ProductService } from '../../../../product/services/product.service';
import { SelectItem } from 'primeng/api';
import { Configuration } from '../../../../shared/helper/constants';
import { TranslateService } from '../../../../shared/services/translate.service';
import Utils from '../../../../shared/helper/utility';
import { ProductDataService } from '../../../../shared/services/product-data.service';
import { ProductCategoryService } from '../../../../management/services/product-category.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridProductsComponent implements OnInit {
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
  selectedProductCategory: SelectItem;
  selectedProduct: ProductModel;

  constructor(
    private translateService: TranslateService,
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,
    private data: ProductDataService
  ) {
    this.langDisplay = this.translateService
      .get(['TAB_TITLE', 'PRODUCT', 'BUTTONS', 'NOTIFICATION'])
      .then((res: any) => {
        if (res) {
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
    this.data.currentProduct.subscribe(
      (selectedProduct) => (this.selectedProduct = selectedProduct)
    );
  }

  initColumns() {
    this.cols = [
      {
        field: 'productImage',
        header: '',
      },
      {
        field: 'name',
        header: '',
      },
      {
        field: 'productCode',
        header: '',
      },
      {
        field: 'amount',
        header: '',
      },
      {
        field: 'price',
        header: '',
      },
      {
        field: 'productCategoryId',
        header: '',
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

  selectProduct(product) {
    this.data.selectProduct(product);
  }

  initProductDropDowns() {
    this.productCategoryService
      .getSubCategories()
      .subscribe((responseResult: any) => {
        this.productCategoryOptions = Utils.parseListDataToOptions(
          responseResult,
          true,
          this.langDisplayButton.ALL,
          null
        );
      });
  }
}
