import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { Menu } from 'src/app/theme/components/menu/menu.model';
import { HomeService } from '../home/service/home.service';
import { NewService } from './new.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [MenuService]
})
export class NewsComponent implements OnInit {

  @Input('menuParentId') menuParentId = 0;
  CategoryBlog: any;
  public menuItems: Array<Menu>;
  constructor(public menuService: MenuService, public newService: NewService, public homeService: HomeService, public route: Router,public appService:AppService) { }

  ngOnInit() {
    this.getCategoryBlog();
    this.getBlogViewLot();
  }

  onClick(dataCategory: any = {}) {
    this.newService.dataCategory = dataCategory;
    this.getBlogByCategory(dataCategory.Id)
  }

  getCategoryBlog() {
    this.newService.getCategoryBlog().subscribe((res: any) => {
      this.CategoryBlog = [];
      if (Array.isArray(res.Data) && res.Data.length > 0) {
        this.CategoryBlog = res.Data;
        this.newService.dataCategory = res.Data[0];
        this.getBlogByCategory(res.Data[0].Id)
      }
    });
  }

  getBlogByCategory(CategoryId) {
    this.newService.getBlogByCategory(CategoryId).subscribe((res: any) => {
      this.newService.listBlog = res.Data;
    });
  }
  public listBlogLot: any = [];
  getBlogViewLot() {
    this.homeService.getListBlog().subscribe((res: any) => {
      this.listBlogLot = res.Data;
    });
  }

  choiceBlog(dataBlog) {
    // this.newService.dataBlog = dataBlog; 
    this.route.navigate(['/news/detail'], { queryParams: { Id: dataBlog.Id } });

  }

 

}
