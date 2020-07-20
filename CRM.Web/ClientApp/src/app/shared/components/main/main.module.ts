import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module';
import { NavMenuComponentTop } from '../nav-menu-top/nav-menu-top.component';
import { NavMenuComponentLeft } from '../nav-menu-left/nav-menu-left.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared.module';
import { MainComponent } from './main.component';
import { ProductModule } from '../../../product/product.module';
import { AuthenticationModule } from '../../../authentication/authentication.module';
import { CustomerModule } from '../../../customer/customer.module';
import { OrderModule } from '../../../order/order.module';
import { PosModule } from '../../../pos/pos.module';
import { ManagementModule } from '../../../management/management.module';

@NgModule({
  declarations: [
    NavMenuComponentTop,
    NavMenuComponentLeft,
    BreadcrumbComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MainRoutingModule,
    ProductModule,
    AuthenticationModule,
    CustomerModule,
    OrderModule,
    PosModule,
    ManagementModule,
  ],
})
export class MainModule {}
