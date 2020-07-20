import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/theme/components/menu/menu.model';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { HomeService } from '../../home/service/home.service';
import { NewService } from '../new.service';
import { Router } from "@angular/router";
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input('menuParentId') menuParentId = 0;

  // public menuItems: Array<Menu>;
  public listBlog: any[] = [];
  constructor(public menuService: MenuService, public newService: NewService, private route: Router,public appService:AppService) { }

  ngOnInit() {
  }

  choiceBlog(dataBlog) {
    // this.newService.dataBlog = dataBlog; 
    this.route.navigate(['/news/detail'], { queryParams: { Id: dataBlog.Id } });

  }
}