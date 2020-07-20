import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../shared/helper/constants';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SupplierModel} from '../models/supplier.model';
import {CodeModel, JsonResultModel} from '../../shared/models/json-result.model';

@Injectable({providedIn: 'root'})
export class SupplierService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(customerId: number = 0, customerCode: string = ''): Observable<SupplierModel[]> {
    let params = '';
    if (customerId && customerId !== 0) {
      params += `customerId=${customerId}`;
    }
    if (customerCode) {
      params += `${(params ? '&' : '')}customerCode=${customerCode}`;
    }
    if (params) {
      params = `?${params}`;
    }
    return this.doGet(`${Constants.Suppliers}${params}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(supplier => new SupplierModel().fromJson(supplier));
        }
        return [];
      })
    );
  }

  create(data: SupplierModel): Observable<boolean> {
    return this.doPost(Constants.Suppliers, data)
    .pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  update(data: SupplierModel): Observable<boolean> {
    return this.doPut(Constants.Suppliers, data)
    .pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  delete(id: number): Observable<boolean> {
    return this.doDelete(`${Constants.Suppliers}?id=${id}`)
    .pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }
}
