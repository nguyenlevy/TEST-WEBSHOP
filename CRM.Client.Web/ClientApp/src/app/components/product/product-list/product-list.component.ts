import { Component, OnInit, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Pagination, Property } from 'src/app/app.models';
import { Settings, AppSettings } from 'src/app/app.settings';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { AppService } from 'src/app/app.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() set listProduct(listData: any) {
    this.properties = [];
    if (Array.isArray(listData) && listData.length > 0) {
      this.formatListProduct(listData);
      this.setUpDisplay();
    }
  };
  @Input() isSale: boolean = false;

  watcher: Subscription;
  activeMediaQuery = '';
  public slides = [];
  public properties: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public count: number = 8;
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination: Pagination = new Pagination(1, 8, null, 2, 0, 0);
  public message: string;
  public featuredProperties: Property[];

  public settings: Settings;
  // tslint:disable-next-line: max-line-length
  constructor(public appSettings: AppSettings, public appService: AppService, public mediaObserver: MediaObserver, private productService: ProductService,) {
    this.settings = this.appSettings.settings;

    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.viewCol = 100;
      }
      else if (change.mqAlias == 'sm') {
        this.viewCol = 50;
      }
      else if (change.mqAlias == 'md') {
        this.viewCol = 33.3;
      }
      else {
        this.viewCol = 25;
      }
    });

  }

  ngOnInit() {
    this.getSlides();
    // this.getProperties();
    this.getFeaturedProperties();
  }

  setUpDisplay() {
    this.config = {
      observer: false,
      slidesPerView: 5,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: true,
      lazy: true,
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

  public config: any;
  ngAfterViewInit() {
    this.setUpDisplay();
  }

  ngDoCheck() {
    if (this.settings.loadMore.load) {
      this.settings.loadMore.load = false;
    }

  }

  ngOnDestroy() {
    this.resetLoadMore();
    this.watcher.unsubscribe();
  }

  public getSlides() {
    this.appService.getHomeCarouselSlides().subscribe(res => {
      this.slides = res;
    })
  }



  public formatListProduct(listProduct: any = []) {
    if (listProduct.length > 1) {
      this.properties = listProduct.map((data: any, idex: number) => {
        if (idex % 2 == 0) {
          if (idex < listProduct.length) {
            data.displayOn = true;
          } else {
            data.displayEnd = true;
          }
        }
        if (idex == 0) {
          data.displayOn = true;
        }
        return data;
      });
    } else if (listProduct.length == 1) {
      this.properties = listProduct;
      this.properties[0].displayEnd = true;
    }
  }

  public resetLoadMore() {
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }

  public searchClicked() {
    this.properties.length = 0;
    // this.getProperties();
  }
  public searchChanged(event) {
    event.valueChanges.subscribe(() => {
      this.resetLoadMore();
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
    this.resetLoadMore();
    this.properties.length = 0;
    // this.getProperties();

  }
  public changeSorting(sort) {
    this.sort = sort;
    this.resetLoadMore();
    this.properties.length = 0;
  }
  public changeViewType(obj) {
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol;
  }


  public getFeaturedProperties() {
    this.appService.getFeaturedProperties().subscribe(properties => {
      this.featuredProperties = properties;
    })
  }


}

