import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '../../../../shared/services/translate.service';
import {Title} from '@angular/platform-browser';
import {Configuration} from '../../../../shared/helper/constants';
import {Router} from '@angular/router';
import {ProductModel} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';

declare function Notify(message, status): any;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formProduct: FormGroup;
  langDisplayMessage: any;

  constructor(private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private titleService: Title,
              private router: Router,
              private productService: ProductService) {
    translateService.get(['TAB_TITLE', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.ADD_PRODUCT);
        this.langDisplayMessage = res.NOTIFICATION;
      }
    });
  }

  ngOnInit() {
    this.formProduct = this.formBuilder.group({
      name: ['', Validators.required],
      cost: '',
      price: '',
      productCode: '',
      productTypeId: '',
      minStockQuantity: 0,
      followInventory: [['followInventory']],
      allowNegativeInventory: [['allowNegativeInventory']],
      productManufacturerId: '',
      taxCategoryId: '',
      maxStockQuantity: 100,
      manageBySerial: [['manageBySerial']],
      publishedPOS: [['publishedPOS']],
      selectedProductCategory: null,
      selectedProductType: null,
      selectedProductManufacturer: null,
      selectedTaxCategory: null
    });
  }

  onSave(data: ProductModel) {
    this.productService.create(data).subscribe((res: boolean) => {
      if (res) {
        Notify(this.langDisplayMessage && this.langDisplayMessage.ADD_SUCCESS ?
          this.langDisplayMessage.ADD_SUCCESS : 'Thêm thành công',
          Configuration.NotificationType.Success);
        this.router.navigate(['app/products']);
      } else {
        Notify(this.langDisplayMessage && this.langDisplayMessage.ADD_FAIL ?
          this.langDisplayMessage.ADD_FAIL : 'Thêm thất bại',
          Configuration.NotificationType.Error);
      }
    });
  }
}
