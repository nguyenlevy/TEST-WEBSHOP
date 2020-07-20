import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ManagementComponent } from './components/managements/management.component';
import { ProductCategoriesComponent } from './components/managements/product-categories/product-categories.component';

@NgModule({
  declarations: [ManagementComponent, ProductCategoriesComponent],
  imports: [SharedModule, CommonModule],
})
export class ManagementModule {}
