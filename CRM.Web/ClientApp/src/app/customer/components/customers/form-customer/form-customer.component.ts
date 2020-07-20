import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {CustomerModel} from '../../../models/customer.model';
import {TranslateService} from '../../../../shared/services/translate.service';
import {Configuration} from '../../../../shared/helper/constants';

declare function Notify(message, status): any;

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {
  formCustomer: FormGroup;
  submitted: boolean = false;
  isUpdated: boolean;
  mainItem: CustomerModel;
  langDisplayMessage: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private customerService: CustomerService,
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
    this.formCustomer = this.formBuilder.group({
      id: this.isUpdated ? this.mainItem.id : '',
      name: [this.isUpdated ? this.mainItem.name : '', Validators.required],
      customerCode: [this.isUpdated ? this.mainItem.customerCode : '', Validators.required],
      phoneNumber: this.isUpdated ? this.mainItem.phoneNumber : '',
      email: [this.isUpdated ? this.mainItem.email : '', Validators.email],
      birthday: this.isUpdated && this.mainItem.birthday ? new Date(this.mainItem.birthday) : null,
      gender: this.isUpdated ? this.mainItem.gender : 1
    });
  }

  get f() {
    return this.formCustomer.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.formCustomer.invalid) {
      return;
    }
    const currentCustomerId = this.isUpdated ? this.mainItem.id : null;
    this.customerService.get(null, this.formCustomer.get('customerCode').value)
    .subscribe((customers: CustomerModel[]) => {
      const isDuplicateCustomerCode = currentCustomerId ? customers.some(p => p.id !== currentCustomerId) : customers.length > 0;
      if (!isDuplicateCustomerCode) {
        const customerData = new CustomerModel().fromJson(this.formCustomer.value);
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

  create(data: CustomerModel) {
    this.customerService.create(data).subscribe((res: boolean) => {
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

  update(data: CustomerModel) {
    this.customerService.update(data).subscribe((res: boolean) => {
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
