
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TypeProduct } from 'src/app/shared/common/typeProduct';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  public dataCategory: any;
  public listBlog: any = [];
  public dataBlog: any;
  constructor(private httpTransfer: TransferHttpService) { }
  getCategoryBlog() {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Blogs?TypeSearch=3`);
  }
  getBlogByCategory(CategoryID: number) {
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Blogs?TypeSearch=4&CategoryID=${CategoryID}`);
  }
  getDetailBlog(BlogId:number){
    return this.httpTransfer.get(`${environment.apiDomainLocal}api/Blogs?TypeSearch=2&Id=${BlogId}`);
  }
  
}

