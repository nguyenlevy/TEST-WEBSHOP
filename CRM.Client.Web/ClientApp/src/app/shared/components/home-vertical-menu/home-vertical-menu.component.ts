import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-vertical-menu',
  templateUrl: './home-vertical-menu.component.html',
  styleUrls: ['./home-vertical-menu.component.scss'],
})
export class HomeVerticalMenuComponent implements OnInit {
  @Input() idCategoryHover(id){
    console.log(id);
    
  };
  @Input() set listData(listdata: any) {
    if (Array.isArray(listdata) && listdata.length > 0) {
      this.listCategorys = listdata;
    }
  };
  @Output() sendDataCategoryParent = new EventEmitter();
  public listCategorys: any = [];
  constructor() { }

  ngOnInit() {

  }

  hoverCategorys(Id:number =null) {
    this.sendDataCategoryParent.emit(Id);
  }

}
