import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-vertical-menu-child',
  templateUrl: './home-vertical-menu-child.component.html',
  styleUrls: ['./home-vertical-menu-child.component.scss']
})
export class HomeVerticalMenuChildComponent implements OnInit {
  @Input('menuParentId') menuParentId;
  @Input() set listData(listdata: any) {
    this.listCategoryChild = [];

    if (Array.isArray(listdata) && listdata.length > 0) {
      this.listCategoryChild = listdata;
    }
  };
  public listCategoryChild: any = [];
  constructor() { }

  ngOnInit() {

  }
  checkBorder(index) {
    return (index + 1) % 3 != 0;
  }

  hoverCategorys(idex) {
    // this.listCategoryChild[idex].displaySubMenu = true;
  } 

  hoverOutCategorys(idex) {
    // this.listCategoryChild[idex].displaySubMenu = false;
  }


}
