import { Component, OnInit, Input, SimpleChange, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { KeyLocal } from '../../common/keyLocal.enum';
import { Router } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() property: any = {};
  @Input() viewType: string = "grid";
  @Input() viewColChanged: boolean = false;
  @Input() fullWidthPage: boolean = true;
  @Input() isSale: boolean = false;
  public column: number = 4;
  // public address:string; 
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public settings: Settings;

  public displayAddShopping: boolean = false;
  constructor(public appSettings: AppSettings, public appService: AppService, private route: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.viewColChanged) {
      this.getColumnCount(changes.viewColChanged.currentValue);
      if (!changes.viewColChanged.isFirstChange()) {
        if (this.property.gallery.length > 1) {
          this.directiveRef.update();
        }
      }
    }

  }

  public getColumnCount(value) {
    if (value == 25) {
      this.column = 4;
    }
    else if (value == 33.3) {
      this.column = 3;
    }
    else if (value == 50) {
      this.column = 2
    }
    else {
      this.column = 1;
    }
  }

  public getStatusBgColor(status) {
    switch (status) {
      case 'For Sale':
        return '#558B2F';
      case 'For Rent':
        return '#1E88E5';
      case 'Open House':
        return '#009688';
      case 'No Fees':
        return '#FFA000';
      case 'Hot Offer':
        return '#F44336';
      case 'Sold':
        return '#000';
      default:
        return '#01579B';
    }
  }


  public initCarousel() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: false,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      nested: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      speed: 500,
      effect: "slide"
    }
  }

  public addToCompare() {
    // this.appService.addToCompare(this.property, CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
  }

  public onCompare() {
    return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
  }

  public addToFavorites() {
    // this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl' : 'ltr');
  }

  public onFavorites() {
    return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
  }

  onHoverItem() {
    this.displayAddShopping = true;
  }
  onOutItem() {
    this.displayAddShopping = false;
  }


  choiceProduct(product: any = {}) {
    let listProductSelected: any = [];
    let chkExits: boolean = false;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.selectedProduct) && this.appService.isJSON(localStorage.getItem(KeyLocal.selectedProduct))) {
        listProductSelected = JSON.parse(localStorage.getItem(KeyLocal.selectedProduct));
        if (Array.isArray(listProductSelected) && listProductSelected.length > 0) {
          listProductSelected.forEach(data => {
            if (data.Id == product.Id) {
              data.quantity++;
              chkExits = true;
            }
          });
        }
      }

    }
    if (!chkExits) {
      product.quantity = 1;
      listProductSelected.push(product);
    }
    this.appService.saveListProductLocal(listProductSelected);

    this.appService.notificautionStatus('Đã thêm vào giỏ hàng', product.Name);
  }

  viewProductDetail() {
    this.route.navigate(['/detail'], { queryParams: { Id: this.property.Id } });
  }

}

