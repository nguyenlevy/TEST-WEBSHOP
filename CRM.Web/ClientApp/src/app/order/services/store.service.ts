import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../shared/helper/constants';
import { map } from 'rxjs/operators';
import { StoreModel } from '../models/store.model';
import {
  CodeModel,
  JsonResultModel
} from '../../shared/models/json-result.model';

@Injectable({ providedIn: 'root' })
export class StoreService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(): Observable<StoreModel[]> {
    return this.doGet(`${Constants.Stores}`).pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(store => new StoreModel().fromJson(store));
        }
        return [];
      })
    );
  }
}
