import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { KeyLocal } from 'src/app/shared/common/keyLocal.enum';
import { AppService } from 'src/app/app.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.scss']
})
export class CartShopComponent implements OnInit {

  public listProductSelected: any = [];
  public totalMoney: any = { total: 0 };
  public listProductViewed: any[] = [];
  public isHaveProductCart: boolean = false;

  constructor(public appService: AppService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.getProduct();
    this.listProductViewed = this.appService.getListProductViewed();
  }

  getProduct() {
    let listProductSelected: any = [];
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem(KeyLocal.selectedProduct) && this.appService.isJSON(localStorage.getItem(KeyLocal.selectedProduct))) {
        listProductSelected = JSON.parse(localStorage.getItem(KeyLocal.selectedProduct));
        if (Array.isArray(listProductSelected) && listProductSelected.length > 0) {
          this.isHaveProductCart = true;
          this.listProductSelected = listProductSelected;
          this.countMoney();
        }
      }
    }

  }

  changeQuantity(quanity, index) {
    if (Number(quanity) > 0) {
      this.listProductSelected[index].quantity = Number(quanity);
      this.countMoney();
    } else {
      alert("Số lượng mua phải lớn hơn 0");
      this.listProductSelected[index].quantity = 1;
    }

  }

  deleteProductSelected(index) {
    this.listProductSelected.splice(index, 1);
    this.countMoney();
    if (this.listProductSelected.length < 1) {
      this.isHaveProductCart = false;
    }
  }


  countMoney() {
    this.totalMoney.total = 0;
    let total: Number = 0;
    this.listProductSelected.forEach((dataProduct: any) => {
      dataProduct.totalMoney = dataProduct.Cost * dataProduct.quantity;
      total += dataProduct.totalMoney;
    });

    this.totalMoney.total = total;

    this.appService.saveListProductLocal(this.listProductSelected);
  }
}