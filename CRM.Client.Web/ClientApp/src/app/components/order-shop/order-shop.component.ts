import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { KeyLocal } from 'src/app/shared/common/keyLocal.enum';
import { AppService } from 'src/app/app.service';
import { isPlatformBrowser } from '@angular/common';
import { HomeService } from '../home/service/home.service';
import { FormBuilder, Validators } from '@angular/forms';
export interface Transaction {
  nameproduct: string;
  price: number;

}

@Component({
  selector: 'app-order-shop',
  templateUrl: './order-shop.component.html',
  styleUrls: ['./order-shop.component.scss']
})
export class OrderShopComponent implements OnInit {
  displayedColumns: string[] = ['nameproduct', 'price'];
  transactions: Transaction[] = [
    { nameproduct: 'Bôt sả nguyên chất', price: 2.780 },
    { nameproduct: 'Ngũ cốc', price: 2.780 },
  ];
  Email: string;
  Note: string;
  dataContact: any = {};
  public listProductSelected: any = [];
  public totalMoney: any = { total: 0 };
  public isHaveProductCart: boolean = false;


  constructor(private appService: AppService,
    private fbContact: FormBuilder,
    private _homeService: HomeService,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.creatFormContact();
  }
  getTotalCost() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
  ngOnInit(): void {
    this.getProduct();
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

  countMoney() {
    this.totalMoney.total = 0;
    let total: Number = 0;
    this.listProductSelected.forEach((dataProduct: any) => {
      dataProduct.totalMoney = dataProduct.Cost * dataProduct.quantity;
      total += dataProduct.totalMoney;
    });

    this.totalMoney.total = total;
  }
  creatFormContact() {
    this.dataContact = this.fbContact.group({
      Name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', Validators.required],

    });
  }

  orderSuccess() {
    if (this.dataContact.valid) {
      let dataPost: any = {};
      dataPost.Name = this.dataContact.value.Name;
      dataPost.PhoneNumber = this.dataContact.value.PhoneNumber;
      dataPost.Note = this.Note;
      dataPost.Email = this.Email;
      this._homeService.createContacts(dataPost).subscribe(res => {
        console.log("orderSuccess call api", res);
      })
    } else {
      this.appService.notificautionStatusError('Vui lòng nhập đủ thông tin');
    }
  }
}
