import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/orders/order.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { OrderItemComponent } from './components/orders/order-item/order-item.component';
import { SaleItemComponent } from './components/orders/sale-item/sale-item.component';
import { FormOrderComponent } from './components/orders/form-order/form-order.component';
import { ReturnSupplierComponent } from './components/orders/return-supplier/return-supplier.component';

@NgModule({
  declarations: [
    OrderComponent,
    ListOrdersComponent,
    OrderItemComponent,
    SaleItemComponent,
    FormOrderComponent,
    ReturnSupplierComponent,
  ],
  imports: [SharedModule, CommonModule],
  entryComponents: [FormOrderComponent],
})
export class OrderModule {}
