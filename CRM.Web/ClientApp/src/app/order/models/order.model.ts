import {StoreModel} from './store.model';
import {CustomerModel} from '../../customer/models/customer.model';
import Utils from '../../shared/helper/utility';
import {EmployeeModel} from './employee.model';
import {ProductModel} from '../../product/models/product.model';
import {ShipmentModel} from './shipment.model';
import {OrderNoteModel} from './order-note.model';
import {OrderItemModel} from './order-item.model';

export class OrderModel {
  order: number;
  id: number;
  saleDate: Date;
  storeId: number;
  store: StoreModel;
  storeName: string;
  customerId: number;
  customer: CustomerModel;
  customerName: string;
  orderStatusId: number;
  orderStatusName: string;
  orderTax: number;
  orderDiscount: number;
  orderTotal: number;
  orderDebt: number;
  orderPaid: number;
  orderCode: string;
  sellerId: number;
  seller: EmployeeModel;
  sellerName: string;
  shipper: string;
  orderType: OrderType;
  shipment: ShipmentModel;
  orderNote: OrderNoteModel;
  orderItems: OrderItemModel[];
  paymentMethodId: number;

  fromJson(json: any) {
    if (!json) {
      return null;
    }
    this.id = json.id || 0;
    this.saleDate = json.saleDate ? new Date(json.saleDate) : null;
    this.storeId = json.storeId;
    this.store = json.store;
    this.storeName = json.store ? json.store.name : '';
    this.customerId = json.customerId;
    this.customer = json.customer;
    this.customerName = json.customer ? json.customer.name : '';
    this.orderStatusId = json.orderStatusId;
    this.orderStatusName = Utils.getOrderStatusName(this.orderStatusId);
    this.sellerId = json.sellerId;
    this.seller = json.seller;
    this.sellerName = json.seller ? json.seller.name : '';
    this.orderCode = json.orderCode;
    this.orderTotal = json.orderTotal;
    this.orderDebt = json.orderDebt;
    this.orderPaid = json.orderPaid;
    this.orderDiscount = json.orderDiscount;
    this.orderType = json.orderType;
    this.shipment = json.shipment;
    this.orderNote = json.orderNote;
    this.orderItems = json.orderItems;
    this.paymentMethodId = json.paymentMethodId;
    return this;
  }
}

export enum OrderStatus {
  Finish,
  Delivery,
  Cancelled,
  Ordered
}

export enum OrderType {
  Order,
  Warehousing,
  Sale,
  ReturnSupplier
}

export class OrderDtoModel {
  customerId: number;
  saleDateUtc: Date;
  sellerId: number;
  orderNote: string;
  carrierId: number;
  deliveryDate: Date;
  shipper: string;
  shipmentNote: string;
  products: ProductModel[] = [];
  paymentMethodId: number;
  orderPaid: number;
  orderDebt: number;
  orderTotal: number;
  orderDiscount: number;
  orderType: OrderType;

  fromJson(json: any) {
    if (!json) {
      return null;
    }

    this.customerId = json.customerId;
    this.saleDateUtc = json.saleDateUtc;
    this.sellerId = json.sellerId;
    this.orderNote = json.orderNote || '';
    this.carrierId = json.carrierId;
    this.deliveryDate = json.deliveryDate;
    this.shipper = json.shipper || '';
    this.shipmentNote = json.shipmentNote || '';
    this.products = json.products;
    this.orderDebt = json.orderDebt || 0;
    this.orderPaid = json.orderPaid || 0;
    this.orderDiscount = json.orderDiscount || 0;
    this.orderTotal = json.orderTotal || 0;
    this.paymentMethodId = json.paymentMethodId;
    this.orderType = json.orderType;
    return this;
  }
}
