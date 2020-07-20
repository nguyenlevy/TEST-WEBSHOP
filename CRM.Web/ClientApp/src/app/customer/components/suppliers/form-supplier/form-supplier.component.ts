import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {TranslateService} from '../../../../shared/services/translate.service';
import {Configuration} from '../../../../shared/helper/constants';
import {SupplierModel} from '../../../models/supplier.model';
import {SupplierService} from '../../../services/supplier.service';

declare function Notify(message, status): any;

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.scss']
})
export class FormSupplierComponent implements OnInit {
  formSupplier: FormGroup;
  submitted: boolean = false;
  isUpdated: boolean;
  mainItem: SupplierModel;
  langDisplayMessage: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private supplierService: SupplierService,
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) {
    translateService.get(['NOTIFICATION']).then((res: any) => {
      if (res) {
        this.langDisplayMessage = res.NOTIFICATION;
      }
    });
    const data = this.config.data;
    this.mainItem = data.mainItem;
    this.isUpdated = data.isUpdated;
    this.formSupplier = this.formBuilder.group({
      id: this.isUpdated ? this.mainItem.id : '',
      name: [this.isUpdated ? this.mainItem.name : '', Validators.required],
      customerCode: [this.isUpdated ? this.mainItem.customerCode : '', Validators.required],
      phoneNumber: this.isUpdated ? this.mainItem.phoneNumber : '',
      email: [this.isUpdated ? this.mainItem.email : '', Validators.email],
      address: this.isUpdated ? this.mainItem.address : '',
      taxCode: this.isUpdated ? this.mainItem.taxCode : '',
      note: this.isUpdated ? this.mainItem.note : ''
    });
  }

  get f() {
    return this.formSupplier.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.formSupplier.invalid) {
      return;
    }
    const currentCustomerId = this.isUpdated ? this.mainItem.id : null;
    this.supplierService.get(null, this.formSupplier.get('customerCode').value)
    .subscribe((suppliers: SupplierModel[]) => {
      const isDuplicateCustomerCode = currentCustomerId ? suppliers.some(p => p.id !== currentCustomerId) : suppliers.length > 0;
      if (!isDuplicateCustomerCode) {
        const customerData = new SupplierModel().fromJson(this.formSupplier.value);
        if (this.isUpdated) {
          this.update(customerData);
        } else {
          this.create(customerData);
        }
      } else {
        this.f.customerCode.setErrors({isDuplicate: true});
      }
    });
  }

  create(data: SupplierModel) {
    this.supplierService.create(data).subscribe((res: boolean) => {
      if (res) {
        Notify(this.langDisplayMessage && this.langDisplayMessage.ADD_SUCCESS ?
          this.langDisplayMessage.ADD_SUCCESS : 'Thêm thành công',
          Configuration.NotificationType.Success);
        this.close();
      } else {
        Notify(this.langDisplayMessage && this.langDisplayMessage.ADD_FAIL ?
          this.langDisplayMessage.ADD_FAIL : 'Thêm thất bại',
          Configuration.NotificationType.Error);
      }
    });
  }

  update(data: SupplierModel) {
    this.supplierService.update(data).subscribe((res: boolean) => {
      if (res) {
        Notify(this.langDisplayMessage && this.langDisplayMessage.UPDATE_SUCCESS ?
          this.langDisplayMessage.UPDATE_SUCCESS : 'Cập nhật thành công',
          Configuration.NotificationType.Success);
        this.close();
      } else {
        Notify(this.langDisplayMessage && this.langDisplayMessage.UPDATE_FAIL ?
          this.langDisplayMessage.UPDATE_FAIL : 'Cập nhật thất bại',
          Configuration.NotificationType.Error);
      }
    });
  }

  close() {
    this.ref.close();
  }
}
