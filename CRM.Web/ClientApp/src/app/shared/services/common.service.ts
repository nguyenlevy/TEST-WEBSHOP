import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../helper/constants';
import {Observable} from 'rxjs';
import {MenuItem} from '../models/menu-item.model';
import {map} from 'rxjs/operators';
import {CodeModel, JsonResultModel} from '../models/json-result.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }


  getListMenu(): Observable<MenuItem[]> {
    return this.doGet(`${Constants.Common}/${Constants.Menu}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(menuItem => new MenuItem().fromJson(menuItem));
        }
        return [];
      })
    );
  }
}
