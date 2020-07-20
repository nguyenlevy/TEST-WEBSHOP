import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CookieKey} from '../helper/constants';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected domain: string = environment.api;

  constructor(protected http: HttpClient) {
  }

  protected doGet(apiUrl: string, params?: string): Observable<any> {
    const url = (params === undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
    const header = this.createHeaders();
    return this.http.get(url, {headers: header});
  }

  protected doPost(apiUrl: string, body?: any, params?: string): Observable<any> {
    const url = (params === undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
    const header = this.createHeaders();
    return this.http.post<any>(url, body, {headers: header});
  }

  protected doPut(apiUrl: string, body: any, params?: string): Observable<any> {
    const url = (params === undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
    const header = this.createHeaders();
    return this.http.put(url, JSON.stringify(body), {headers: header});
  }

  protected doDelete(apiUrl: string, params?: string): Observable<any> {
    const url = (params === undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
    const header = this.createHeaders();
    return this.http.delete(url, {headers: header});
  }

  private createHeaders(type: string = '', token?: string) {
    const tokenKey = token && token.trim() !== '' ? token : localStorage.getItem(CookieKey.Token);
    let contentType = '';
    let header = new HttpHeaders();
    header = header.set('Cache-control', 'no-cache');
    header = header.set('Pragma', 'no-cache');
    header = header.set('Access-Control-Allow-Origin', '*');
    header = header.set('Access-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header = header.set('Access-Control-Headers',
      'Access-Control-Allow-Headers, Origin, Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    if (tokenKey !== undefined && tokenKey !== null) {
      header = header.set('Authorization', `Bearer ${tokenKey}`);
    }

    switch (type) {
      case '':
      case 'json':
        contentType = 'application/json; charset=utf-8';
        break;
      default:
        break;
    }
    header = header.set('Content-Type', contentType);
    return header;
  }
}
