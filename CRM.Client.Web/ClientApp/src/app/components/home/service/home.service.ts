import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TypeProduct } from 'src/app/shared/common/typeProduct';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpTransfer: TransferHttpService, @Inject(PLATFORM_ID) private platformId: Object) {

  }
  public setHeader() {
    let headers = null;
    try {
      if (isPlatformBrowser(this.platformId)) {
        const token = localStorage.getItem('token');
        if (token !== '') {
          headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + token });
        } else { headers = new HttpHeaders({ 'Content-Type': 'application/json' }); }
      }
    } catch (e) {
      headers = new Headers({ 'Content-Type': 'application/json' });
    }
    return headers;
  }

  getListProduct(type: number = TypeProduct.Category) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/products?TypeSearch=${type}`);
  }
  getDetailProduct(productId: number, type: number = TypeProduct.Category) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/products?ProductId=${productId}&TypeSearch=${type}`);
  }

  getListBar() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Policys`);
  }

  getListBlog() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Blogs?TypeSearch=1`);
  }

  getListCategorys() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Categorys?TypeSearch=1`);
  }

  getListProductbyCategorys(CategoryID) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/products?TypeSearch=${TypeProduct.Category}&CategoryID=${CategoryID}`);
  }

  getListSlide() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Banners`);
  }

 
  createContacts(form : any){
    // console.log(form);
    
    return this.httpTransfer.post(`${environment.apiDomainLocal}api/Contacts`, form);
  }
}
