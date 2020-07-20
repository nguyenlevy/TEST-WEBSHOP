import { AppService } from './../../app.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Settings, AppSettings } from './../../app.settings';
import { HomeService } from './service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [];
  public settings: Settings;

  public listProductViewed: any[] = [];

  public disPlayView: boolean = false;
  public disPlayView1: boolean = false;


  constructor(public appSettings: AppSettings, private router: Router, public appService: AppService, public homeService: HomeService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;

  }
  public dataTest: any = {};
  ngOnInit() {
    this.getSlides();
    this.getListProductNews();
    this.getListProductBestSeller();
    this.getListProductFlashSale();
    // this.getListProductCategory();
    this.getListBar();
    this.getListCategorys();
    this.listProductViewed = this.appService.getListProductViewed();

  }

  public getSlides() {
    this.appService.getHomeCarouselSlides().subscribe(res => {
      this.slides = res;
    })
  }

  public listProductNews: any[] = [];
  // Hàng mới về
  getListProductNews() {
    this.homeService.getListProduct(4).subscribe((res: any) => {
      this.listProductNews = res.Data;
      this.dataTest = res.Data[0];
    });
  }

  public listProductBestSeller: any[] = [];
  // Hàng bán chạy nhất
  getListProductBestSeller() {
    this.homeService.getListProduct(5).subscribe((res: any) => {
      this.listProductBestSeller = res.Data;
    });
  }

  public listBar: any[] = [];
  getListBar() {
    this.homeService.getListBar().subscribe((res: any) => {
      this.listBar = res.Data;
    });
  }

  public listProductFlashSale: any[] = [];
  // Hàng Khuyến mại
  getListProductFlashSale() {
    this.homeService.getListProduct(3).subscribe((res: any) => {
      this.listProductFlashSale = res.Data;
    });
  }

  public listProductCategory: any[] = [];
  // Lọc sản phẩm theo Category
  getListProductByCategory() {
    this.homeService.getListCategorys().subscribe((res: any) => {
      this.listProductCategory = res.Data;
    });
  }

  public listCategorys: any = [];
  getListCategorys() {
    this.homeService.getListCategorys().subscribe((res: any) => {
      this.listCategorys = res.Data
    });
  }

  changeTab(data) {
    switch (data.index) {
      case 1:
        this.disPlayView = true;
        break;
      case 2:
        this.disPlayView1 = true;
        break;
    }
  }

  choiceCategorys(dataCategorys:any={}) {
    this.router.navigate(['/product'], { queryParams: { CategoryId: dataCategorys.Id } });
  }
}
