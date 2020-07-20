import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/helper/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryModel } from '../models/category.model';

import {
  CodeModel,
  JsonResultModel,
} from '../../shared/models/json-result.model';

@Injectable({ providedIn: 'root' })
export class ProductCategoryService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(
    categoryId: number = 0,
    categoryName: string = ''
  ): Observable<CategoryModel[]> {
    let params = '';
    if (categoryId && categoryId !== 0) {
      params += `categoryId=${categoryId}`;
    }
    if (categoryName) {
      params += `${params ? '&' : ''}name=${categoryName}`;
    }
    if (params) {
      params = `?${params}`;
    }
    return this.doGet(
      `${Constants.Common}/${Constants.ProductCategories}${params}`
    ).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((productCategory) =>
            new CategoryModel().fromJson(productCategory)
          );
        }
        return [];
      })
    );
  }

  getSubCategories(categoryId: number = 0): Observable<CategoryModel[]> {
    let params = '';
    if (categoryId && categoryId !== 0) {
      params += `id=${categoryId}`;
    }
    if (params) {
      params = `?${params}`;
    }
    return this.doGet(
      `${Constants.Common}/${Constants.ProductCategories}/${Constants.SubCategories}${params}`
    ).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map((productCategory) =>
            new CategoryModel().fromJson(productCategory)
          );
        }
        return [];
      })
    );
  }

  create(categoryData: CategoryModel): Observable<boolean> {
    return this.doPost(
      `${Constants.Common}/${Constants.ProductCategories}`,
      categoryData
    ).pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  update(categoryData: CategoryModel): Observable<boolean> {
    return this.doPut(
      `${Constants.Common}/${Constants.ProductCategories}`,
      categoryData
    ).pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  delete(categoryId: number): Observable<JsonResultModel> {
    return this.doDelete(
      `${Constants.Common}/${Constants.ProductCategories}?id=${categoryId}`
    ).pipe(
      map((res: JsonResultModel) => {
        return res;
      })
    );
  }
}
