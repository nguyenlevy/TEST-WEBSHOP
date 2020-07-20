import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerComponent} from './components/customers/customer.component';
import {ListCustomersComponent} from './components/customers/list-customers/list-customers.component';
import {FormCustomerComponent} from './components/customers/form-customer/form-customer.component';
import {ListSuppliersComponent} from './components/suppliers/list-suppliers/list-suppliers.component';
import {FormSupplierComponent} from './components/suppliers/form-supplier/form-supplier.component';
import {SupplierComponent} from './components/suppliers/supplier.component';

@NgModule({
  declarations: [
    CustomerComponent,
    ListCustomersComponent,
    FormCustomerComponent,
    ListSuppliersComponent,
    FormSupplierComponent,
    SupplierComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  entryComponents: [
    FormCustomerComponent,
    FormSupplierComponent
  ]
})
export class CustomerModule {

}
