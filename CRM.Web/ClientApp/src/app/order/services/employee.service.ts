import {Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../../shared/helper/constants';
import {map} from 'rxjs/operators';
import {CodeModel, JsonResultModel} from '../../shared/models/json-result.model';
import {EmployeeModel} from '../models/employee.model';

@Injectable({providedIn: 'root'})
export class EmployeeService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  get(): Observable<EmployeeModel[]> {
    return this.doGet(`${Constants.Employees}`)
    .pipe(
      map((res: JsonResultModel) => {
        if (res.code === CodeModel.Success) {
          return res.data.map(employee => new EmployeeModel().fromJson(employee));
        }
        return [];
      })
    );
  }
}
