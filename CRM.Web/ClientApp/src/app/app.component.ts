import { Component } from '@angular/core';
import {TranslateService} from './shared/services/translate.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private titleService: Title,
    private translateService: TranslateService) {
    translateService.get(['TAB_TITLE']).then((res: any) => {
      if (res && res.TAB_TITLE) {
        titleService.setTitle(res.TAB_TITLE.APP);
      }
    });
  }
}
