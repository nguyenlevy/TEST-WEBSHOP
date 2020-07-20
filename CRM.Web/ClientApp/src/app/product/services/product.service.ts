import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/helper/constants';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { map } from 'rxjs/operators';
import { CategoryModel } from '../models/category.model';
import { ProductTypeModel } from '../models/product-type.model';
import { ProductManufacturerModel } from '../models/product-manufacturer.model';
import { TaxCategoryModel } from '../models/tax-category.model';
import { ProductStatusModel } from '../models/product-status.model';
import {
  CodeModel,
  JsonResultModel,
} from '../../shared/models/json-result.model';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(productId: number = 0, name: string = ''): Observable<ProductModel[]> {
    let params = '';
    if (productId && productId !== 0) {
      params += `productId=${productId}`;
    }
    if (name) {
      params += `${params ? '&' : ''}name=${name}`;
    }
    if (params) {
      params = `?${params}`;
    }
    return this.doGet(`${Constants.Products}${params}`).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((product) =>
            new ProductModel().fromJson(product)
          );
        }
        return [];
      })
    );
  }

  create(productData: ProductModel): Observable<boolean> {
    return this.doPost(Constants.Products, productData).pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  update(productData: ProductModel): Observable<boolean> {
    return this.doPut(Constants.Products, productData).pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  delete(productId: number): Observable<boolean> {
    return this.doDelete(`${Constants.Products}?id=${productId}`).pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  getProductTypes(): Observable<ProductTypeModel[]> {
    return this.doGet(`${Constants.Products}/${Constants.ProductTypes}`).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((productType) =>
            new ProductTypeModel().fromJson(productType)
          );
        }
        return [];
      })
    );
  }

  getProductStatuses(): Observable<ProductStatusModel[]> {
    return this.doGet(
      `${Constants.Products}/${Constants.ProductStatuses}`
    ).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((productStatus) =>
            new ProductStatusModel().fromJson(productStatus)
          );
        }
        return [];
      })
    );
  }

  getProductManufacturers(): Observable<ProductManufacturerModel[]> {
    return this.doGet(
      `${Constants.Products}/${Constants.ProductManufacturers}`
    ).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((productManufacturer) =>
            new ProductManufacturerModel().fromJson(productManufacturer)
          );
        }
        return [];
      })
    );
  }

  getTaxCategories(): Observable<TaxCategoryModel[]> {
    return this.doGet(`${Constants.Products}/${Constants.TaxCategories}`).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((taxCategory) =>
            new TaxCategoryModel().fromJson(taxCategory)
          );
        }
        return [];
      })
    );
  }
}
