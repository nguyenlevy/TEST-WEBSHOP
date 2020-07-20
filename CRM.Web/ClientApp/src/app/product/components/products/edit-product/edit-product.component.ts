import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '../../../../shared/services/translate.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {ProductModel} from '../../../models/product.model';
import {Configuration} from '../../../../shared/helper/constants';

declare function Notify(message, status): any;
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  formProduct: FormGroup;
  langDisplayMessage: any;
  productId: number;
  isLoadProductSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private titleService: Title,
              private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) {
    translateService.get(['TAB_TITLE', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.EDIT_PRODUCT);
        this.langDisplayMessage = res.NOTIFICATION;
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = +params.productId;
      this.productService.get(this.productId).subscribe((products: ProductModel[]) => {
        if (products && products.length > 0) {
          const product = products[0];
          this.formProduct = this.formBuilder.group({
            id: product.id,
            name: [product.name, Validators.required],
            cost: product.cost,
            price: product.price,
            productCode: product.productCode,
            productTypeId: product.productTypeId,
            minStockQuantity: product.minStockQuantity,
            followInventory: [product.followInventory ? ['followInventory'] : ''],
            allowNegativeInventory: [product.allowNegativeInventory ? ['allowNegativeInventory'] : ''],
            productManufacturerId: product.productManufacturerId,
            taxCategoryId: product.taxCategoryId,
            maxStockQuantity: product.maxStockQuantity,
            manageBySerial: [product.manageBySerial ? ['manageBySerial'] : ''],
            publishedPOS: [product.publishedPOS ? ['publishedPOS'] : ''],
            productStatusId: product.productStatusId,
            selectedProductCategory: product.productCategories.length > 0 ?
              {value: product.productCategories[0].categoryId} : null,
            selectedProductType: product.productType ? {value: product.productType.id, label: product.productType.name} : null,
            selectedProductManufacturer: product.productManufacturer ?
              {value: product.productManufacturer.id, label: product.productManufacturer.name} : null,
            selectedTaxCategory: product.taxCategory ? {value: product.taxCategory.id, label: product.taxCategory.name} : null
          });
          this.isLoadProductSuccess = true;
        }
      });
    });
  }

  onSave(data: ProductModel) {
    this.productService.update(data).subscribe((res: boolean) => {
      if (res) {
        Notify(this.langDisplayMessage && this.langDisplayMessage.UPDATE_SUCCESS ?
          this.langDisplayMessage.UPDATE_SUCCESS : 'Cập nhật thành công',
          Configuration.NotificationType.Success);
        this.router.navigate(['app/products']);
      } else {
        Notify(this.langDisplayMessage && this.langDisplayMessage.UPDATE_FAIL ?
          this.langDisplayMessage.UPDATE_FAIL : 'Cập nhật thất bại',
          Configuration.NotificationType.Error);
      }
    });
  }
}
