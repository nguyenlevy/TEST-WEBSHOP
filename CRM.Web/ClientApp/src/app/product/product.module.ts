import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProductComponent} from './components/products/product.component';
import {ListProductsComponent} from './components/products/list-products/list-products.component';
import {AddProductComponent} from './components/products/add-product/add-product.component';
import {FormProductComponent} from './components/products/form-product/form-product.component';
import {EditProductComponent} from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ListProductsComponent,
    AddProductComponent,
    FormProductComponent,
    EditProductComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [FormProductComponent]
})

export class ProductModule {
}
