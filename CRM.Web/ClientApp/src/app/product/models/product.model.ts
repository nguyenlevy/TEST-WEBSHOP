import { ProductTypeModel } from './product-type.model';
import { ProductManufacturerModel } from './product-manufacturer.model';
import { TaxCategoryModel } from './tax-category.model';
import { ProductCategoryModel } from './product-category.model';
import { ProductStatusModel } from './product-status.model';

export class ProductModel {
  order: number;
  id: number;
  name = '';
  productCode = '';
  productTypeId: number;
  productType: ProductTypeModel;
  cost: number;
  price: number;
  amount: number;
  productManufacturerId: number;
  productManufacturer: ProductManufacturerModel;
  minStockQuantity: number;
  followInventory: boolean;
  allowNegativeInventory: boolean;
  taxCategoryId: number;
  taxCategory: TaxCategoryModel;
  maxStockQuantity: number;
  manageBySerial: boolean;
  publishedPOS: boolean;
  productCategoryName: string;
  productCategoryId: number;
  productManufacturerName: string;
  productCategories: ProductCategoryModel[] = [];
  productStatusId: number;
  productStatus: ProductStatusModel;
  productStatusName: string;
  weight: number;
  intoMoney: number;

  fromJson(json: any): ProductModel {
    if (!json) {
      return null;
    }
    this.id = json.id || 0;
    this.name = json.name || '';
    this.productCode = json.productCode || '';
    if (json.productTypeId) {
      this.productTypeId = json.productTypeId;
    }
    this.cost = parseInt(json.cost, 10) || 0;
    this.price = parseInt(json.price, 10) || 0;
    this.amount = parseInt(json.amount, 10) || 0;
    if (json.productManufacturerId) {
      this.productManufacturerId = json.productManufacturerId;
    }
    this.minStockQuantity = parseInt(json.minStockQuantity, 10) || 0;
    this.followInventory = json.followInventory;
    this.allowNegativeInventory = json.allowNegativeInventory;
    if (json.taxCategoryId) {
      this.taxCategoryId = json.taxCategoryId;
    }
    this.maxStockQuantity = parseInt(json.maxStockQuantity, 10) || 0;
    this.manageBySerial = json.manageBySerial;
    this.publishedPOS = json.publishedPOS;
    this.productManufacturer = json.productManufacturer || null;
    this.productType = json.productType || null;
    this.taxCategory = json.taxCategory || null;
    this.productCategories = json.productCategories;
    this.productManufacturerName = json.productManufacturerName || '';
    this.productCategoryName = json.productCategoryName || '';
    this.productCategoryId = json.productCategoryId;
    if (json.productStatusId) {
      this.productStatusId = json.productStatusId;
    }
    this.productStatus = json.productStatus || null;
    this.productStatusName = json.productStatusName || '';
    this.weight = json.weight;
    this.intoMoney = 0;

    return this;
  }

  exportData(json: any) {
    if (!json) {
      return null;
    }
    return {
      STT: json.order,
      'Tên hàng hóa': json.name,
      'Mã hàng hóa': json.productCode,
      'Số lượng': json.amount,
      'Giá bán': json.price,
      'Nhóm hàng': json.productCategoryName,
      'Nhà sản xuất': json.productManufacturerName,
      'Tình trạng': json.productStatusName,
    };
  }
}
