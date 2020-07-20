import { Component, OnInit, SimpleChange, Inject, ViewChild, Input, PLATFORM_ID } from '@angular/core';
import { KeyLocal } from '../../common/keyLocal.enum';
import { isPlatformBrowser } from '@angular/common';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';
import { Pagination, Property } from 'src/app/app.models';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.interface';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HomeService } from 'src/app/components/home/service/home.service';

@Component({
  selector: 'app-product-item-two-line',
  templateUrl: './product-item-two-line.component.html',
  styleUrls: ['./product-item-two-line.component.scss']
})
export class ProductItemTwoLineComponent implements OnInit {
  @Input() set categoryID(id) {
    if (id && id != null) {
      this.getListProductByCategory(id)
    }
  };
  @Input() isSale: boolean = false;

  watcher: Subscription;
  activeMediaQuery = '';
  public listProduct: Product[];
  public slides = [];
  public properties: any[];
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
  constructor(public appSettings: AppSettings, public appService: AppService, public mediaObserver: MediaObserver, public homeService: HomeService) {
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
    this.getProperties();
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
      this.getProperties();
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

  public getProperties() {
    // this.appService.getProperties().subscribe(data => {
    //   if (this.properties && this.properties.length > 0) {
    //     this.settings.loadMore.page++;
    //     this.pagination.page = this.settings.loadMore.page;
    //   }
    //   let result = this.filterData(data);
    //   if (result.data.length == 0) {
    //     this.properties.length = 0;
    //     this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
    //     this.message = 'No Results Found';
    //     return false;
    //   }
    //   if (this.properties && this.properties.length > 0) {
    //     this.properties = this.properties.concat(result.data);
    //   }
    //   else {
    //     this.properties = result.data;
    //   }
    //   this.pagination = result.pagination;
    //   this.message = null;

    //   if (this.properties.length == this.pagination.total) {
    //     this.settings.loadMore.complete = true;
    //     this.settings.loadMore.result = this.properties.length;
    //   }
    //   else {
    //     this.settings.loadMore.complete = false;
    //   }
    // })
  }

  getListProductByCategory(idCategory) {
    this.homeService.getListProductbyCategorys(idCategory).subscribe((res: any) => {
      if (Array.isArray(res.Data) && res.Data.length > 0) {
        this.listProduct = res.Data;
        this.formatListProduct();
        this.setUpDisplay();
      }
    });
  }

  public formatListProduct() {
    this.properties = this.listProduct.map((data: any, idex: number) => {
      if (idex % 2 != 0) {
        if (idex < this.listProduct.length) {
          data.displayOn = true;
        } else {
          data.displayEnd = true;
        }
      }
      return data;
    });
  }

  public resetLoadMore() {
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }

  public searchClicked() {
    this.properties.length = 0;
    this.getProperties();
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
        this.getProperties();
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
    this.getProperties();

  }
  public changeSorting(sort) {
    this.sort = sort;
    this.resetLoadMore();
    this.properties.length = 0;
    this.getProperties();
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

