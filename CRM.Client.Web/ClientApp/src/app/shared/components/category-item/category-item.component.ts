import { Component, OnInit, Input, ViewChild, Inject, PLATFORM_ID, SimpleChange, Output, EventEmitter } from '@angular/core';
import { KeyLocal } from '../../common/keyLocal.enum';
import { isPlatformBrowser } from '@angular/common';
import { SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() property: any = {};
  @Input() viewType: string = "grid";
  @Input() viewColChanged: boolean = false;
  @Input() fullWidthPage: boolean = true;
  @Output() sendDataCategoryItem = new EventEmitter();
  public column: number = 4;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public settings: Settings;

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
          // this.directiveRef.update();
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

  choiceCategorys() {
    this.sendDataCategoryItem.emit(this.property);
  }

}

