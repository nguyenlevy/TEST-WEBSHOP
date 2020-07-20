import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OrderShopComponent } from './components/order-shop/order-shop.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
    { path: 'news', loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule) },
    { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
    { path: 'order', component: OrderShopComponent },
    { path: 'cart', component: CartShopComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'detail', component: ProductDetailComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    initialNavigation: 'enabled' // for one load page, without reload
    // useHash: true
});