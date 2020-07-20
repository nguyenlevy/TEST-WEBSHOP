import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../../../product/components/products/product.component';
import { AuthGuard } from '../../helper/auth.guard';
import { AddProductComponent } from '../../../product/components/products/add-product/add-product.component';
import { ListProductsComponent } from '../../../product/components/products/list-products/list-products.component';
import { EditProductComponent } from '../../../product/components/products/edit-product/edit-product.component';
import { CustomerComponent } from '../../../customer/components/customers/customer.component';
import { ListCustomersComponent } from '../../../customer/components/customers/list-customers/list-customers.component';
import { SupplierComponent } from '../../../customer/components/suppliers/supplier.component';
import { ListSuppliersComponent } from '../../../customer/components/suppliers/list-suppliers/list-suppliers.component';
import { OrderComponent } from '../../../order/components/orders/order.component';
import { ListOrdersComponent } from '../../../order/components/orders/list-orders/list-orders.component';
import { OrderItemComponent } from '../../../order/components/orders/order-item/order-item.component';
import { SaleItemComponent } from '../../../order/components/orders/sale-item/sale-item.component';
import { ReturnSupplierComponent } from '../../../order/components/orders/return-supplier/return-supplier.component';
import { MainComponent } from './main.component';
import { PosComponent } from '../../../pos/components/pos/pos.component';
import { ManagementComponent } from '../../../management/components/managements/management.component';
import { ProductCategoriesComponent } from '../../../management/components/managements/product-categories/product-categories.component';

const appRoutes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pos',
        component: PosComponent,
        data: { breadcrumb: null },
        canActivate: [AuthGuard],
      },
      {
        path: 'products',
        component: ProductComponent,
        data: { breadcrumb: 'PRODUCT' },
        children: [
          {
            path: 'add',
            component: AddProductComponent,
            data: { breadcrumb: 'ADD_PRODUCT' },
          },
          {
            path: '',
            component: ListProductsComponent,
            data: { breadcrumb: null },
          },
          {
            path: 'edit',
            component: EditProductComponent,
            data: { breadcrumb: 'EDIT_PRODUCT' },
          },
        ],
      },
      {
        path: 'customers',
        component: CustomerComponent,
        data: { breadcrumb: 'CUSTOMER' },
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ListCustomersComponent,
            data: { breadcrumb: null },
          },
        ],
      },
      {
        path: 'suppliers',
        component: SupplierComponent,
        data: { breadcrumb: 'SUPPLIER' },
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ListSuppliersComponent,
            data: { breadcrumb: null },
          },
        ],
      },
      {
        path: 'orders',
        component: OrderComponent,
        data: { breadcrumb: 'ORDER' },
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: ListOrdersComponent,
            data: { breadcrumb: null },
          },
          {
            path: 'order-item',
            component: OrderItemComponent,
            data: { breadcrumb: 'ORDER_ITEM' },
          },
          {
            path: 'sale-item',
            component: SaleItemComponent,
            data: { breadcrumb: 'SALE_ITEM' },
          },
          {
            path: 'return-supplier',
            component: ReturnSupplierComponent,
            data: { breadcrumb: 'RETURN_SUPPLIER' },
          },
        ],
      },
      {
        path: 'managements',
        component: ManagementComponent,
        data: { breadcrumb: 'MANAGEMENT' },
        children: [
          {
            path: 'product-categories',
            component: ProductCategoriesComponent,
            data: { breadcrumb: 'PRODUCT_CATEGORY' },
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
