import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../shared/helper/constants';
import {map} from 'rxjs/operators';
import {CodeModel, JsonResultModel} from '../../shared/models/json-result.model';
import {PaymentMethodModel} from '../models/payment-method.model';

@Injectable({providedIn: 'root'})
export class PaymentMethodService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(): Observable<PaymentMethodModel[]> {
    return this.doGet(`${Constants.PaymentMethods}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(paymentMethod => new PaymentMethodModel().fromJson(paymentMethod));
        }
        return [];
      })
    );
  }
}
