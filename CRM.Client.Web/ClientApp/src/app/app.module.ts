import { MenuHeaderComponent } from './shared/components/menu-header/menu-header.component';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { AgmCoreModule } from '@agm/core';
import { EmbedVideo } from 'ngx-embed-video';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
const config: InputFileConfig = {
  fileAccept: '*'
};

import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

import { AppRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';
import { AppInterceptor } from './theme/utils/app-interceptor';

import { Toolbar1Component } from './theme/components/toolbar1/toolbar1.component';
import { Toolbar2Component } from './theme/components/toolbar2/toolbar2.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { CurrencyComponent } from './theme/components/currency/currency.component';
import { LangComponent } from './theme/components/lang/lang.component';
import { SocialIconsComponent } from './theme/components/social-icons/social-icons.component';
import { ContactsComponent } from './theme/components/contacts/contacts.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { OrderShopComponent } from './components/order-shop/order-shop.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TransferHttpService, TransferHttpModule } from '@gorniv/ngx-transfer-http';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserMenuComponent,
    CurrencyComponent,
    LangComponent,
    SocialIconsComponent,
    ContactsComponent,
    Toolbar1Component,
    Toolbar2Component,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    FooterComponent,
    MenuHeaderComponent,
    OrderShopComponent,
    CartShopComponent,
    ContactComponent,
    ProductDetailComponent
  ],
  imports: [
    // TransferState,
    BrowserModule.withServerTransition({ appId: 'ClientApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1rF9bttCxRmsNdZYjW7FzIoyrul5jb-s',
      libraries: ["places"]
    }),
    EmbedVideo.forRoot(),
    NgProgressModule,
    NgProgressHttpModule,
    InputFileModule.forRoot(config),
    AppRouting,
    SharedModule,
    TransferHttpModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    AppSettings,
    // { provide: OverlayContainer, useClass: CustomOverlayContainer },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    TransferHttpService,
    TransferState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
