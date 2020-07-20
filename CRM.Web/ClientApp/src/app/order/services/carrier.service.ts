import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../shared/helper/constants';
import {map} from 'rxjs/operators';
import {CarrierModel} from '../models/carrier.model';
import {CodeModel, JsonResultModel} from '../../shared/models/json-result.model';

@Injectable({providedIn: 'root'})
export class CarrierService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(): Observable<CarrierModel[]> {
    return this.doGet(`${Constants.Carriers}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(carrier => new CarrierModel().fromJson(carrier));
        }
        return [];
      })
    );
  }
}
