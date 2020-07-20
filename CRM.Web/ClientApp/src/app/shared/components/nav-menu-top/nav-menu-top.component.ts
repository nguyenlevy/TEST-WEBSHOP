import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../../services/translate.service';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {User} from '../../../product/models/user';
import {SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
import {CodeModel, JsonResultModel} from '../../models/json-result.model';

@Component({
  selector: 'app-nav-menu-top',
  styleUrls: ['./nav-menu-top.component.scss'],
  templateUrl: './nav-menu-top.component.html'
})
export class NavMenuComponentTop implements OnInit {
  languageOptions: SelectItem[] = [];
  selectedLanguage: string;
  user: User;
  langDisplay: any;

  constructor(
    private translateService: TranslateService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.translateService.get(['MENU']).then((res: any) => {
      if (res) {
        this.langDisplay = res.MENU;
      }
    });
  }

  ngOnInit() {
    this.languageOptions = [
      {label: this.langDisplay && this.langDisplay.VIETNAMESE ? this.langDisplay.VIETNAMESE : 'Tiếng Việt', value: 'vn'},
      {label: this.langDisplay && this.langDisplay.ENGLISH ? this.langDisplay.ENGLISH : 'Tiếng Anh', value: 'en'}
    ];
    this.user = this.authenticationService.currentUserValue;
  }

  onChangeLanguage() {
    this.translateService.use(this.selectedLanguage);
  }

  onLogout() {
    this.authenticationService.logout().subscribe((res: JsonResultModel) => {
      if (res.code === CodeModel.Success) {
        this.authenticationService.removeCookies();
        this.router.navigate(['/login']);
      }
    });
  }
}
