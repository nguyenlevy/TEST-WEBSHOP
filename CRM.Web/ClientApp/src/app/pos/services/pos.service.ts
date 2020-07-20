import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PosService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }
}
