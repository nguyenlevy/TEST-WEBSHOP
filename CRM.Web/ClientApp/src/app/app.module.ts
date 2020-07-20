import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NumberDirective } from './shared/numbers-only.directive';
import { TranslateService } from './shared/services/translate.service';
import { ProductDataService } from './shared/services/product-data.service';
import { CookieKey } from './shared/helper/constants';
import {
  ConfirmationService,
  DialogService,
  MessageService,
} from 'primeng/api';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './authentication/services/error-interceptor';
import { MainModule } from './shared/components/main/main.module';

export function setupTranslateFactory(service: TranslateService) {
  const currentLanguage = localStorage.getItem(CookieKey.CurrentLanguage);
  return () => service.use(currentLanguage ? currentLanguage : 'vn');
}

@NgModule({
  imports: [BrowserModule, SharedModule, AppRoutingModule, MainModule],
  declarations: [AppComponent, NumberDirective],
  providers: [
    TranslateService,
    ProductDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
    DialogService,
    DatePipe,
    ConfirmationService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
