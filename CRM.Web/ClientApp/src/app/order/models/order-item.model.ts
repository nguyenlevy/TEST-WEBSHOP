import {ProductModel} from '../../product/models/product.model';

export class OrderItemModel {
  id: number;
  productId: number;
  amount: number;
  product: ProductModel;
}
