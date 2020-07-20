import { AppService } from './../../../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/components/home/service/home.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  public keyword: string = "";
  public disPlayCategoryHover: boolean = false;

  constructor(public appService: AppService, private route: Router, private activeParam: ActivatedRoute, private homeService: HomeService) { }
  ngOnInit() {

    this.activeParam.queryParams.subscribe((res: any) => {
      this.keyword = "";
      if (res.keyword && res.keyword != null) {
        this.keyword = res.keyword;
      }
    });
    this.getListCategorys();
    this.route.events.subscribe(val => {
      this.appService.getProductSelected();
    });
  }

  public sidenavToggle() {
    this.onMenuIconClick.emit();
  }

  searchProductByKeyWord(event) {
    if (this.keyword && this.keyword != null) {
      this.route.navigate(['/product'], { queryParams: { keyword: event } });
    }
  }

  removeKeyWord() {
    this.keyword = '';
  }

  hoverMenu() {
    this.disPlayCategoryHover = true;
    this.disPlayCategoryChild = true;
  }

  hoverOutMenu() {
    this.disPlayCategoryHover = false;
    this.disPlayCategoryChild = false;
  }

  public listCategorys: any = [];
  getListCategorys() {
    this.homeService.getListCategorys().subscribe((res: any) => {
      this.listCategorys = res.Data

    });
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
