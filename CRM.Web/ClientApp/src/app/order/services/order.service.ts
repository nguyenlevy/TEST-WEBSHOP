import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../shared/helper/constants';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OrderDtoModel, OrderModel, OrderType} from '../models/order.model';
import {CodeModel, JsonResultModel} from '../../shared/models/json-result.model';

@Injectable({providedIn: 'root'})
export class OrderService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(orderId: number = 0): Observable<OrderModel[]> {
    let params = '';
    if (orderId && orderId !== 0) {
      params += `orderId=${orderId}`;
    }
    if (params) {
      params = `?${params}`;
    }
    return this.doGet(`${Constants.Orders}${params}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(customer => new OrderModel().fromJson(customer));
        }
        return [];
      })
    );
  }

  delete(id: number): Observable<boolean> {
    return this.doDelete(`${Constants.Orders}?id=${id}`)
    .pipe(
      map((res: JsonResultModel) => {
        return res.code === CodeModel.Success;
      })
    );
  }

  create(data: OrderDtoModel) {
    return this.doPost(Constants.Orders, data);
  }

  update(id: number, data: OrderDtoModel) {
    return this.doPut(`${Constants.Orders}?orderId=${id}`, data);
  }
}
