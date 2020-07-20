import { Component, OnInit, Input, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { Menu } from 'src/app/theme/components/menu/menu.model';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Pagination, Property } from 'src/app/app.models';
import { Settings, AppSettings } from 'src/app/app.settings';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { isPlatformBrowser } from '@angular/common';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProductService } from './product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeService } from '../home/service/home.service';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MenuService]
})
export class ProductComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };
  public listProductByKeyWord: any[] = [];
  public listProductViewed: any[] = [];
  public properties: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 33.3;
  public count: number = 12;
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination: Pagination = new Pagination(1, this.count, null, 2, 0, 0);
  public message: string;
  public watcher: Subscription;

  public dataFilter: any = {
    CategoryId: null,
    AttributeId: null,
    displayTypeListProduct: null, //1-Category;2-keyword;3-HotSale,BestSaler...
    Filter: null,
  };

  public listAttributeChoice: any[] = [];

  public settings: Settings
  constructor(public appSettings: AppSettings, public appService: AppService, public mediaObserver: MediaObserver,
    @Inject(PLATFORM_ID) private platformId: Object, private productService: ProductService, private homeService: HomeService, private activeParam: ActivatedRoute, private route: Router) {
    this.getParamFromUrl();
    this.settings = this.appSettings.settings;
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.sidenavOpen = false;
        this.viewCol = 100;
      }
      else if (change.mqAlias == 'sm') {
        this.sidenavOpen = false;
        this.viewCol = 50;
      }
      else if (change.mqAlias == 'md') {
        this.viewCol = 50;
        this.sidenavOpen = true;
      }
      else {
        this.viewCol = 33.3;
        this.sidenavOpen = true;
      }
    });

  }

  ngOnInit() {
    this.getListAttribute();
    this.listProductViewed = this.appService.getListProductViewed();
    // this.getParamFromUrl();
  }
  public listProductFilter: any[] = [];
  public Title: String;
  public displayNoResult: boolean = true;

  getParamFromUrl() {
    this.activeParam.queryParams.subscribe((res: any) => {
      this.listProductFilter = [];
      this.listProductByKeyWord = [];

      if (res.TypeProduct && res.TypeProduct != null) {
        this.dataFilter.displayTypeListProduct = 3;
        if (res.TypeProduct == 'newProduct') {
          this.dataFilter.Filter = false;
          this.dataFilter.Filter = res.TypeProduct;
          this.homeService.getListProduct(8).subscribe((res: any) => {
            if (Array.isArray(res.Data) && res.Data.length > 0) {
              this.listProductFilter = res.Data;
              this.displayNoResult = false;
            } else {
              this.displayNoResult = true;
            }
            this.Title = "Sản phẩm mới ";
          });
        }
        if (res.TypeProduct == 'bestSeller') {
          this.dataFilter.Filter = false;
          this.dataFilter.Filter = res.TypeProduct;
          this.homeService.getListProduct(9).subscribe((res: any) => {
            if (Array.isArray(res.Data) && res.Data.length > 0) {
              this.listProductFilter = res.Data;

              this.displayNoResult = false;
            } else {
              this.displayNoResult = true;
            }
            this.Title = "Top bán chạy ";
          });
        }
        if (res.TypeProduct == 'hotSale') {
          this.dataFilter.Filter = false;
          this.dataFilter.Filter = res.TypeProduct;
          this.homeService.getListProduct(10).subscribe((res: any) => {
            if (Array.isArray(res.Data) && res.Data.length > 0) {
              this.listProductFilter = res.Data;
              this.displayNoResult = false;
            } else {
              this.displayNoResult = true;
            }
            this.Title = "Khuyến mại hot";
          });
        }
      }



      // Get Sản phẩm theo Categorys
      if (res.CategoryId && res.CategoryId != null) {
        this.dataFilter.displayTypeListProduct = 1;
        this.dataFilter.displayKeyword = false;
        this.dataFilter.CategoryId = res.CategoryId;
        this.getOneCategorys(this.dataFilter.CategoryId);
        this.getListProductbyCategorysAttribute();
      }
      // Get Sản phẩm theo Keyword
      if (res.keyword && res.keyword != null) {
        this.dataFilter.displayTypeListProduct = 2;
        this.dataFilter.displayKeyword = true;
        this.dataFilter.keyword = res.keyword;
        this.getProductByKeyword(res.keyword);
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  // public getProperties() {
  // }

  public resetPagination() {
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }


  public searchClicked() {
    this.properties.length = 0;
    // this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
  public searchChanged(event) {
    event.valueChanges.subscribe(() => {
      this.resetPagination();
      this.searchFields = event.value;
      setTimeout(() => {
        this.removedSearchField = null;
      });
      if (!this.settings.searchOnBtnClick) {
        this.properties.length = 0;
      }
    });
    event.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      if (!this.settings.searchOnBtnClick) {
        // this.getProperties();
      }
    });
  }
  public removeSearchField(field) {
    this.message = null;
    this.removedSearchField = field;
  }


  public changeCount(count) {
    this.count = count;
    this.properties.length = 0;
    this.resetPagination();
    // this.getProperties();
  }
  public changeSorting(sort) {
    this.sort = sort;
    this.properties.length = 0;
    // this.getProperties();
  }
  public changeViewType(obj) {
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol;
  }


  public onPageChange(e) {
    this.pagination.page = e.pageIndex + 1;
    // this.getProperties();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  public config: any;
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 10,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: false,
      loop: false,
      preloadImages: false,
      lazy: true,
      scrollbar: false,
      breakpoints: {
        600: {
          slidesPerView: 1,
        },
        960: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    }
  }

  // get list Attribute
  public listAttribute: any[] = [];
  getListAttribute() {
    this.productService.getListAttribute().subscribe((res: any) => {
      this.listAttribute = res.Data;
    });
  }

  public dataCategorys: any = {};
  getOneCategorys(CategoryID) {
    this.productService.getOneCategorys(CategoryID).subscribe((res: any) => {
      if (Array.isArray(res.Data) && res.Data.length > 0) {
        this.dataCategorys = res.Data[0];
      }
    });
  }

  // public dataCategorys: any = {};
  getProductByKeyword(keyWord: string) {
    this.productService.getProductByKeyword(keyWord).subscribe((res: any) => {
      if (Array.isArray(res.Data) && res.Data.length > 0) {
        this.listProductByKeyWord = res.Data;
        this.displayNoResult = false;
      }
    });
  }

  chkAttributeValue(dataCheck, dataAttribute) {
    if (dataCheck.checked) {
      this.listAttributeChoice.push(dataAttribute);
    } else {
      this.listAttributeChoice.splice(this.listAttributeChoice.indexOf(dataAttribute), 1)
    }
    this.formatListAttributeOfDataFilter();
  }
  formatListAttributeOfDataFilter() {
    if (Array.isArray(this.listAttributeChoice) && this.listAttributeChoice.length > 0) {
      this.listAttributeChoice.forEach((dataAttribute: any) => {
        this.dataFilter.AttributeId += dataAttribute.AttributeValueId + ',';
      });
    } else {
      this.dataFilter.AttributeId = null;
    }
    this.getListProductbyCategorysAttribute();
  }

  receiverCategoryItem(dataCategory) {
    this.route.navigate(['/product'], { queryParams: { CategoryId: dataCategory.Id } })
  }


  public listProduct: any[] = [];
  getListProductbyCategorysAttribute() {
    this.listProduct = [];
    this.productService.getListProductbyCategorysAttribute(this.dataFilter.CategoryId, this.dataFilter.AttributeId).subscribe((res: any) => {
      if (Array.isArray(res.Data) && res.Data.length > 0) {
        this.listProduct = res.Data;
        this.displayNoResult = false;
      } else {
        this.displayNoResult = true;
      }
    });
  }

  isDisplayCategorySub(listChildren) {
    if (Array.isArray(listChildren) && listChildren.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}