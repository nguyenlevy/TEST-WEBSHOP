import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ProductModel } from '../../product/models/product.model';

@Injectable()
export class ProductDataService {
  private productSource = new BehaviorSubject<ProductModel>(null);
  currentProduct = this.productSource.asObservable();

  constructor() {}

  selectProduct(product: ProductModel) {
    this.productSource.next(product);
  }
}
