import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../../models/product.model';
import { zip } from 'rxjs';
import { SelectItem } from 'primeng/api';
import Utils from '../../../../shared/helper/utility';
import { CategoryModel } from '../../../../management/models/category.model';
import { ProductCategoryModel } from '../../../models/product-category.model';
import { ProductCategoryService } from '../../../../management/services/product-category.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @Input() formProduct: FormGroup;
  @Output() submitData = new EventEmitter<ProductModel>();
  submitted = false;
  productCategoryOptions: SelectItem[] = [];
  productManufacturerOptions: SelectItem[] = [];
  productTypeOptions: SelectItem[] = [];
  taxCategoryOptions: SelectItem[] = [];
  categories: CategoryModel[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private productCategoryService: ProductCategoryService
  ) {}

  get f() {
    return this.formProduct.controls;
  }

  ngOnInit() {
    this.initProductDropDowns();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formProduct.invalid) {
      return;
    }
    const currentProductId = this.formProduct.get('id')
      ? this.formProduct.get('id').value
      : null;
    this.productService
      .get(null, this.formProduct.get('name').value)
      .subscribe((products: ProductModel[]) => {
        const isDuplicateName = currentProductId
          ? products.some((p) => p.id !== currentProductId)
          : products.length > 0;
        if (!isDuplicateName) {
          const productData = this.formProduct.value;
          productData.followInventory =
            productData.followInventory &&
            productData.followInventory.length > 0
              ? true
              : false;
          productData.allowNegativeInventory =
            productData.allowNegativeInventory &&
            productData.allowNegativeInventory.length > 0
              ? true
              : false;
          productData.manageBySerial =
            productData.manageBySerial && productData.manageBySerial.length > 0
              ? true
              : false;
          productData.publishedPOS =
            productData.publishedPOS && productData.publishedPOS.length > 0
              ? true
              : false;
          if (productData.selectedProductCategory) {
            const productCategoryData = new ProductCategoryModel();
            productCategoryData.productId = currentProductId;
            productCategoryData.categoryId =
              productData.selectedProductCategory.value;
            productData.productCategories = [productCategoryData];
          }

          if (productData.selectedProductType) {
            productData.productTypeId = productData.selectedProductType.value;
          } else if (this.productTypeOptions.length > 0) {
            productData.productTypeId = this.productTypeOptions[0].value;
          }

          if (productData.selectedProductManufacturer) {
            productData.productManufacturerId =
              productData.selectedProductManufacturer.value;
          }

          if (productData.selectedTaxCategory) {
            productData.taxCategoryId = productData.selectedTaxCategory.value;
          } else if (this.taxCategoryOptions.length > 0) {
            productData.taxCategoryId = this.taxCategoryOptions[0].value;
          }
          this.submitData.emit(new ProductModel().fromJson(productData));
        } else {
          this.f.name.setErrors({ isDuplicate: true });
        }
      });
  }

  initProductDropDowns() {
    zip(
      this.productCategoryService.get(),
      this.productService.getProductManufacturers(),
      this.productService.getProductTypes(),
      this.productService.getTaxCategories()
    ).subscribe(
      ([
        productCategories,
        productManufacturers,
        productTypes,
        taxCategories,
      ]) => {
        this.categories = productCategories;
        const selectedProductCategoryValue = this.f.selectedProductCategory
          .value;
        if (selectedProductCategoryValue) {
          const findCategory = this.categories.find(
            (c) => c.id === selectedProductCategoryValue.value
          );
          if (findCategory) {
            this.f.selectedProductCategory.setValue({
              value: findCategory.id,
              label: findCategory.name,
            });
          }
        }
        this.productCategoryOptions = Utils.parseListDataToOptions(
          productCategories
        );
        this.productManufacturerOptions = Utils.parseListDataToOptions(
          productManufacturers
        );
        this.productTypeOptions = Utils.parseListDataToOptions(
          productTypes,
          false
        );
        this.taxCategoryOptions = Utils.parseListDataToOptions(
          taxCategories,
          false
        );
      }
    );
  }

  close() {
    this.router.navigate(['app/products']);
  }
}
