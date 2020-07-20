import { Settings, AppSettings } from './../../../app.settings';
import { Component, OnInit, Input, Output } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HomeService } from '../service/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  // @Input('slides') slides: Array<any> = [];
  @Input() listCategorys: Array<any> = [];
  @Input('contentOffsetToTop') contentOffsetToTop;
  public config: SwiperConfigInterface = {};
  public currentSlide;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public homeService: HomeService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getListSlide();
    if (this.contentOffsetToTop)
      this.settings.contentOffsetToTop = this.contentOffsetToTop;

    // this.getListCategorys();
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  ngOnChanges() {
    if (this.listSlide.length > 0) {
      this.currentSlide = this.listSlide[0];
    }
  }

  public initCarousel() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }

  ngOnDestroy() {
    this.settings.contentOffsetToTop = false;
  }

  public onIndexChange(index: number) {
    this.currentSlide = this.listSlide[index];
  }
  public listSlide: any[] = [];
  getListSlide() {
    this.homeService.getListSlide().subscribe((res: any) => {
      this.listSlide = res.Data;
      this.listSlide.forEach(element => {
        element.Image = `${environment.apiDomainLocal}${element.Image}`;
      });
    });
  }


  disPlayCategoryHover: boolean = false;
  hoverMenu() {
    this.disPlayCategoryHover = true;
    this.disPlayCategoryChild = true;
  }

  hoverOutMenu() {
    this.disPlayCategoryHover = false;
    this.disPlayCategoryChild = false;
  }


  public listCategoryChild: any[] = [];
  public disPlayCategoryChild: boolean = false;
  choiceCategoryParent(categoryId: any = null) {
    this.disPlayCategoryChild = false;
    this.listCategoryChild = [];
    if (categoryId && categoryId != null) {
      this.disPlayCategoryChild = true;
      this.listCategorys.forEach((dataCategorys: any) => {
        if (dataCategorys.Id == categoryId) {
          this.listCategoryChild = dataCategorys.listChildren;
        }
      });
    }
  }
}
