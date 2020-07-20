import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../home/service/home.service';
import { isPlatformBrowser } from '@angular/common';
import { KeyLocal } from 'src/app/shared/common/keyLocal.enum';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  public detailProduct: any = {};
  public listProductViewed: any[] = [];
  public listAttributeProduct: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private homeService: HomeService, @Inject(PLATFORM_ID) private platformId: Object, public appService: AppService) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.productId = params.Id;
    });
  }

  ngOnInit(): void {
    this.homeService.getDetailProduct(this.productId, 7).subscribe((res: any) => {
      if (Array.isArray(res.Data) && res.Data.length > 0)
        this.detailProduct = res.Data[0];
      if (Array.isArray(this.detailProduct.Attributes) && this.detailProduct.Attributes.length > 0) {
        this.listAttributeProduct = this.detailProduct.Attributes;
      }
      this.detailProduct.quantity = 1;
      this.saveListProductViewed();
      this.appService.getProductSelected();
    });
    this.listProductViewed = this.appService.getListProductViewed();
  }

  public isDisplayViewed: boolean = false;
  getListProductViewed() {
    let listProductViewed: any[] = [];
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.viewedProduct) && this.appService.isJSON(localStorage.getItem(KeyLocal.viewedProduct))) {
        if (Array.isArray(JSON.parse(localStorage.getItem(KeyLocal.viewedProduct))) && JSON.parse(localStorage.getItem(KeyLocal.viewedProduct)).length > 0) {
          listProductViewed = JSON.parse(localStorage.getItem(KeyLocal.viewedProduct));
          this.isDisplayViewed = true;
        }
      }
    }
    return listProductViewed;
  }

  saveListProductViewed() {
    let listProductViewed: any = [];
    let chkExits: boolean = false;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.viewedProduct) && this.appService.isJSON(localStorage.getItem(KeyLocal.viewedProduct))) {
        listProductViewed = JSON.parse(localStorage.getItem(KeyLocal.viewedProduct));
        if (Array.isArray(listProductViewed) && listProductViewed.length > 0) {
          listProductViewed.forEach(data => {
            if (data.Id == this.detailProduct.Id) {

              chkExits = true;
            }
          });
        }
      }

    }
    if (!chkExits) {
      listProductViewed.push(this.detailProduct);
    }
    this.appService.saveListProductViewed(listProductViewed);
  }


  choiceProduct(product: any = {}) {
    let listProductSelected: any = [];
    let chkExits: boolean = false;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.selectedProduct) && this.appService.isJSON(localStorage.getItem(KeyLocal.selectedProduct))) {
        listProductSelected = JSON.parse(localStorage.getItem(KeyLocal.selectedProduct));
        if (Array.isArray(listProductSelected) && listProductSelected.length > 0) {
          listProductSelected.forEach(data => {
            if (data.Id == product.Id) {
              data.quantity++;
              chkExits = true;
            }
          });
        }
      }

    }
    if (!chkExits) {
      product.quantity = 1;
      listProductSelected.push(product);
    }
    this.appService.saveListProductLocal(listProductSelected);

    this.appService.notificautionStatus('Đã thêm vào giỏ hàng', product.Name);
  }
  changeQuantity(quanity) {
    if (Number(quanity) > 0) {
      this.detailProduct.quantity = Number(quanity);
    } else {
      alert("Số lượng mua phải lớn hơn 0");
      this.detailProduct.quantity = 1;
    }
  }

}
