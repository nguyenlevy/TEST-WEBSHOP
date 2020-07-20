import { BlogItemComponent } from './../../shared/components/blog-item/blog-item.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeVerticalMenuComponent } from '../../shared/components/home-vertical-menu/home-vertical-menu.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeMenuBarComponent } from './home-menu-bar/home-menu-bar.component';
import { TransferHttpService, TransferHttpModule } from '@gorniv/ngx-transfer-http';
import { HttpClientModule } from '@angular/common/http';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    TransferHttpModule,
    HttpClientModule,
  ],
  declarations: [
    HomeComponent,
    HomeSliderComponent,
    HomeMenuBarComponent,
    HomeBlogComponent,
    BlogItemComponent,
  ],
  providers:[TransferHttpService]
})
export class HomeModule { }
