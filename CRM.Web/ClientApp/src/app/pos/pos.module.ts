import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/pos/form-order/form-order.component';
import { GridProductsComponent } from './components/pos/grid-products/grid-products.component';
import { PosComponent } from './components/pos/pos.component';

@NgModule({
  declarations: [PosComponent, FormOrderComponent, GridProductsComponent],
  imports: [SharedModule, CommonModule],
  entryComponents: [FormOrderComponent, GridProductsComponent],
})
export class PosModule {}
