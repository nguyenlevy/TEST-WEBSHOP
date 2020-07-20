import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryModel } from '../../../models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Configuration } from '../../../../shared/helper/constants';
import { TranslateService } from '../../../../shared/services/translate.service';
import { ConfirmationService, DialogService, SelectItem } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { ProductCategoryService } from '../../../services/product-category.service';
import { zip } from 'rxjs/internal/observable/zip';
import Utils from '../../../../shared/helper/utility';
import { CodeModel } from '../../../../shared/models/json-result.model';

declare function Notify(message, status): any;
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductCategoriesComponent implements OnInit {
  mainItems: CategoryModel[] = [];
  mainItem: CategoryModel;
  formProductCategory: FormGroup;
  submitted = false;
  isUpdated: boolean;
  cols: any[];
  colsAction: any[];
  amountToDisplay: number;
  total: number;
  start: number;
  end: number;
  langDisplay: any;
  langDisplayButton: any;
  langDisplayMessage: any;
  optionPageSizes = Configuration.optionPageSizes;
  parentCategoryOptions: SelectItem[] = [];
  constructor(
    private translateService: TranslateService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private productCategoryService: ProductCategoryService
  ) {
    this.langDisplay = this.translateService
      .get(['TAB_TITLE', 'PRODUCT_CATEGORY', 'BUTTONS', 'NOTIFICATION'])
      .then((res: any) => {
        if (res) {
          this.langDisplay = res.PRODUCT_CATEGORY;
          this.langDisplayButton = res.BUTTONS;
          this.langDisplayMessage = res.NOTIFICATION;
        }
      });
    this.initFormProductCategory(null);
  }

  initFormProductCategory(categoryModel: CategoryModel) {
    this.formProductCategory = this.formBuilder.group({
      id: categoryModel ? categoryModel.id : null,
      name: [categoryModel ? categoryModel.name : null, Validators.required],
      note: categoryModel ? categoryModel.note : null,
      parentCategoryId: categoryModel ? categoryModel.parentCategoryId : null,
    });
  }

  ngOnInit() {
    this.initColumns();
    this.amountToDisplay = Configuration.defaultPageSize;
    this.start = 1;
    this.getList();
    this.initCategoryDropDowns(null);
  }

  get f() {
    return this.formProductCategory.controls;
  }

  initColumns() {
    this.cols = [
      {
        field: 'order',
        header:
          this.langDisplay && this.langDisplay.ORDER
            ? this.langDisplay.ORDER
            : 'STT',
        width: '5%',
        sort: false,
      },
      {
        field: 'name',
        header:
          this.langDisplay && this.langDisplay.NAME
            ? this.langDisplay.NAME
            : 'Tên nhóm hàng',
        width: '20%',
        sort: true,
        filterMatchMode: 'contains',
      },
      {
        field: 'parentCategoryName',
        header:
          this.langDisplay && this.langDisplay.PRODUCT_CODE
            ? this.langDisplay.PRODUCT_CODE
            : 'Nhóm hàng cha',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains',
      },
      {
        field: 'note',
        header:
          this.langDisplay && this.langDisplay.NOTE
            ? this.langDisplay.NOTE
            : 'Ghi chú',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains',
      },
    ];
    this.colsAction = [
      {
        field: 'actionEdit',
        header:
          this.langDisplayButton && this.langDisplayButton.EDIT
            ? this.langDisplayButton.EDIT
            : 'Sửa',
        width: '5%',
      },
      {
        field: 'actionDelete',
        header:
          this.langDisplayButton && this.langDisplayButton.DELETE
            ? this.langDisplayButton.DELETE
            : 'Xoá',
        width: '5%',
        sort: false,
      },
    ];
  }

  changeAmount() {
    if (this.amountToDisplay > this.total) {
      this.end = this.total;
    } else {
      this.start = 1;
      this.end = this.amountToDisplay;
    }
  }

  paginate(event) {
    this.start = event.first + 1;
    if (event.first === 0) {
      this.end = this.amountToDisplay;
    } else if (event.first + event.rows > this.total) {
      this.end = this.total;
    } else {
      this.end = event.first + event.rows;
    }
  }

  getList() {
    this.productCategoryService
      .get(null, null)
      .subscribe((responseResult: any) => {
        if (responseResult) {
          this.mainItems = responseResult;
          this.mainItems.forEach((x, index) => {
            x.order = index + 1;
          });
          this.total = this.mainItems.length;
          if (+this.mainItems.length > +this.amountToDisplay) {
            this.end = this.amountToDisplay;
          } else {
            this.end = this.total;
          }
        }
      });
  }

  initCategoryDropDowns(categoryId: number) {
    this.productCategoryService
      .getSubCategories(categoryId)
      .subscribe((responseResult: any) => {
        this.parentCategoryOptions = Utils.parseListDataToOptions(
          responseResult
        );
      });
  }

  edit(data: CategoryModel) {
    this.initCategoryDropDowns(data.id);
    this.initFormProductCategory(data);
  }

  onSubmit() {
    this.submitted = true;
    if (this.formProductCategory.invalid) {
      return;
    }
    const categoryData = new CategoryModel().fromJson(
      this.formProductCategory.value
    );
    this.productCategoryService
      .get(null, this.formProductCategory.get('name').value)
      .subscribe((categories: CategoryModel[]) => {
        const isDuplicateCategoryName = categoryData.id
          ? categories.some((p) => p.id !== categoryData.id)
          : categories.length > 0;
        if (!isDuplicateCategoryName) {
          if (categoryData.id) {
            this.update(categoryData);
          } else {
            this.create(categoryData);
          }
        } else {
          this.f.name.setErrors({ isDuplicate: true });
        }
      });
  }

  create(data: CategoryModel) {
    this.productCategoryService.create(data).subscribe((res: boolean) => {
      if (res) {
        Notify(
          this.langDisplayMessage && this.langDisplayMessage.ADD_SUCCESS
            ? this.langDisplayMessage.ADD_SUCCESS
            : 'Thêm thành công',
          Configuration.NotificationType.Success
        );
        this.cancel();
        this.getList();
      } else {
        Notify(
          this.langDisplayMessage && this.langDisplayMessage.ADD_FAIL
            ? this.langDisplayMessage.ADD_FAIL
            : 'Thêm thất bại',
          Configuration.NotificationType.Error
        );
      }
    });
  }

  update(data: CategoryModel) {
    this.productCategoryService.update(data).subscribe((res: boolean) => {
      if (res) {
        Notify(
          this.langDisplayMessage && this.langDisplayMessage.UPDATE_SUCCESS
            ? this.langDisplayMessage.UPDATE_SUCCESS
            : 'Cập nhật thành công',
          Configuration.NotificationType.Success
        );
        this.cancel();
        this.getList();
      } else {
        Notify(
          this.langDisplayMessage && this.langDisplayMessage.UPDATE_FAIL
            ? this.langDisplayMessage.UPDATE_FAIL
            : 'Cập nhật thất bại',
          Configuration.NotificationType.Error
        );
      }
    });
  }

  delete(id) {
    this.confirmationService.confirm({
      message:
        this.langDisplayMessage &&
        this.langDisplayMessage.CONFIRM_DELETE_MESSAGE
          ? this.langDisplayMessage.CONFIRM_DELETE_MESSAGE
          : 'Bạn chắc chắn muốn xóa dòng này?',
      header:
        this.langDisplayMessage && this.langDisplayMessage.CONFIRM_TITLE
          ? this.langDisplayMessage.CONFIRM_TITLE
          : 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productCategoryService.delete(id).subscribe(
          (responseResult) => {
            console.log('==================  ==================');
            console.log(responseResult);
            console.log('====================================');
            if (responseResult.code === CodeModel.Success) {
              this.getList();
              Notify(
                this.langDisplayMessage &&
                  this.langDisplayMessage.DELETE_SUCCESS
                  ? this.langDisplayMessage.DELETE_SUCCESS
                  : 'Xóa thành công',
                Configuration.NotificationType.Success
              );
            } else {
              Notify(
                this.langDisplay && this.langDisplay[responseResult.message]
                  ? this.langDisplay[responseResult.message]
                  : 'Xóa thất bại',
                Configuration.NotificationType.Error
              );
            }
          },
          (error) => {
            Notify(
              this.langDisplayMessage && this.langDisplayMessage.DELETE_FAIL
                ? this.langDisplayMessage.DELETE_FAIL
                : 'Xóa thất bại',
              Configuration.NotificationType.Error
            );
          }
        );
      },
    });
  }

  cancel() {
    this.submitted = false;
    this.initCategoryDropDowns(null);
    this.initFormProductCategory(null);
  }
}
