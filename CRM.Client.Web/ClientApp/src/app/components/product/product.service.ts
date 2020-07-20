import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpTransfer: TransferHttpService, @Inject(PLATFORM_ID) private platformId: Object) { }

  getListAttribute() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Attributes`);
  }

  getListProductbyCategorysAttribute(CategoryID: number, AttributeIDs: number = null) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/products?TypeSearch=6&CategoryID=${CategoryID}&AttributeIDs=${AttributeIDs}`);
  }

  getOneCategorys(CategoryID) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Categorys?TypeSearch=2&CategoryID=${CategoryID}`);
  }

  getProductByKeyword(keyWord:string){
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/products?TypeSearch=2&Keyword=${keyWord}`);
  }

}
