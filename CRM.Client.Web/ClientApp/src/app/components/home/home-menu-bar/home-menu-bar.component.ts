import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-menu-bar',
  templateUrl: './home-menu-bar.component.html',
  styleUrls: ['./home-menu-bar.component.scss']
})
export class HomeMenuBarComponent implements OnInit {
  @Input() set listData(listData: any) {
    if (Array.isArray(listData) && listData.length > 0) {
      this.listBar = listData;
    }
  };
  public listBar: any = [];
  constructor() { }

  ngOnInit() {
  }

}
