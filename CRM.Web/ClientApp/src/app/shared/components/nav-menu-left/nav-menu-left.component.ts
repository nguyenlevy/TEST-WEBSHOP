import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '../../services/translate.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-nav-menu-left',
  styleUrls: ['./nav-menu-left.component.scss'],
  templateUrl: './nav-menu-left.component.html',
})
export class NavMenuComponentLeft implements OnInit {
  menuItems: MenuItem[] = [];
  langDisplay: any;

  constructor(
    private translateService: TranslateService,
    private commonService: CommonService
  ) {
    this.translateService.get(['MENU']).then((res: any) => {
      if (res && res.MENU) {
        this.langDisplay = res.MENU;
      }
    });
  }

  ngOnInit() {
    this.commonService.getListMenu().subscribe((menuItemsData: MenuItem[]) => {
      this.menuItems = menuItemsData;
      this.menuItems.forEach((menuItem) => {
        menuItem.label =
          this.langDisplay && this.langDisplay[menuItem.label]
            ? this.langDisplay[menuItem.label]
            : menuItem.label;
        menuItem.items.forEach((item) => {
          item.label =
            this.langDisplay && this.langDisplay[item.label]
              ? this.langDisplay[item.label]
              : item.label;
        });
      });
    });
  }
}
