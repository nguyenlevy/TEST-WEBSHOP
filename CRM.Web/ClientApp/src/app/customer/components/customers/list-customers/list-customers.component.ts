import {Component, OnInit} from '@angular/core';
import {Configuration} from '../../../../shared/helper/constants';
import {TranslateService} from '../../../../shared/services/translate.service';
import {ExportService} from '../../../../shared/services/export.service';
import {ConfirmationService, DialogService} from 'primeng/api';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CustomerService} from '../../../services/customer.service';
import {FormCustomerComponent} from '../form-customer/form-customer.component';
import {CustomerModel} from '../../../models/customer.model';

declare function Notify(message, status): any;

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  mainItems: CustomerModel[] = [];
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

  constructor(private dialogService: DialogService,
              private translateService: TranslateService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private exportService: ExportService,
              private customerService: CustomerService,
              private titleService: Title) {
    this.langDisplay = this.translateService.get(['TAB_TITLE', 'CUSTOMER', 'BUTTONS', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.CUSTOMER);
        this.langDisplay = res.CUSTOMER;
        this.langDisplayButton = res.BUTTONS;
        this.langDisplayMessage = res.NOTIFICATION;
      }
    });
  }

  ngOnInit() {
    this.initColumns();
    this.amountToDisplay = Configuration.defaultPageSize;
    this.start = 1;
    this.getList();
  }

  initColumns() {
    this.cols = [
      {
        field: 'order',
        header: this.langDisplay && this.langDisplay.ORDER ? this.langDisplay.ORDER : 'STT',
        width: '5%',
        sort: false
      },
      {
        field: 'customerCode',
        header: this.langDisplay && this.langDisplay.CUSTOMER_CODE ? this.langDisplay.CUSTOMER_CODE : 'Mã KH',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains'
      },
      {
        field: 'name',
        header: this.langDisplay && this.langDisplay.NAME ? this.langDisplay.NAME : 'Tên KH',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains'
      },
      {
        field: 'phoneNumber',
        header: this.langDisplay && this.langDisplay.PHONE_NUMBER ? this.langDisplay.PHONE_NUMBER : 'Điện thoại',
        width: '10%',
        sort: true
      },
      {
        field: 'address',
        header: this.langDisplay && this.langDisplay.ADDRESS ? this.langDisplay.ADDRESS : 'Địa chỉ',
        width: '20%',
        sort: true
      },
      {
        field: 'lastOrders',
        header: this.langDisplay && this.langDisplay.LAST_ORDERS ? this.langDisplay.LAST_ORDERS : 'Lần cuối mua hàng',
        width: '10%',
        sort: true
      },
      {
        field: 'totalSales',
        header: this.langDisplay && this.langDisplay.TOTAL_SALES ? this.langDisplay.TOTAL_SALES : 'Tổng tiền hàng',
        width: '10%',
        sort: true
      },
      {
        field: 'paidAmount',
        header: this.langDisplay && this.langDisplay.PAID_AMOUNT ? this.langDisplay.PAID_AMOUNT : 'Tiền trả hàng',
        width: '10%',
        sort: true
      },
      {
        field: 'debtAmount',
        header: this.langDisplay && this.langDisplay.DEBT_AMOUNT ? this.langDisplay.DEBT_AMOUNT : 'Nợ',
        width: '5%',
        sort: true
      }
    ];
    this.colsAction = [
      {
        field: 'actionEdit', header: this.langDisplayButton && this.langDisplayButton.EDIT ?
          this.langDisplayButton.EDIT : 'Sửa', width: '5%'
      },
      {
        field: 'actionDelete',
        header: this.langDisplayButton && this.langDisplayButton.DELETE ? this.langDisplayButton.DELETE : 'Xoá',
        width: '5%',
        sort: false
      }
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
    } else if ((event.first + event.rows) > this.total) {
      this.end = this.total;
    } else {
      this.end = event.first + event.rows;
    }
  }

  getList() {
    this.customerService.get()
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

  addNew() {
    this.showPopup(this.langDisplay && this.langDisplay.ADD_NEW ?
      this.langDisplay.ADD_NEW : 'Thêm khách hàng', null);
  }

  edit(data: CustomerModel) {
    this.showPopup(this.langDisplay && this.langDisplay.UPDATE ?
      this.langDisplay.UPDATE : 'Cập nhật khách hàng', data, true);
  }

  showPopup(title: string, data: any, isUpdate: boolean = false) {
    const ref = this.dialogService.open(FormCustomerComponent, {
      header: title,
      width: '800px',
      contentStyle: {
        padding: '0', 'max-height': 'fit-content', width: '800px',
        height: 'fit-content', 'min-height': 'fit-content', overflow: 'auto'
      },
      data: {
        mainItem: data,
        isUpdated: isUpdate
      }
    });

    ref.onClose.subscribe(() => {
      this.getList();
    });
  }

  delete(id) {
    this.confirmationService.confirm({
      message: this.langDisplayMessage && this.langDisplayMessage.CONFIRM_DELETE_MESSAGE ?
        this.langDisplayMessage.CONFIRM_DELETE_MESSAGE : 'Bạn chắc chắn muốn xóa dòng này?',
      header: this.langDisplayMessage && this.langDisplayMessage.CONFIRM_TITLE ?
        this.langDisplayMessage.CONFIRM_TITLE : 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customerService.delete(id)
        .subscribe((responseResult: boolean) => {
          if (responseResult) {
            this.getList();
            Notify(this.langDisplayMessage && this.langDisplayMessage.DELETE_SUCCESS ?
              this.langDisplayMessage.DELETE_SUCCESS : 'Xóa thành công',
              Configuration.NotificationType.Success);
          } else {
            Notify(this.langDisplayMessage && this.langDisplayMessage.DELETE_FAIL ?
              this.langDisplayMessage.DELETE_FAIL : 'Xóa thất bại',
              Configuration.NotificationType.Error);
          }
        }, error => {
          Notify(this.langDisplayMessage && this.langDisplayMessage.DELETE_FAIL ?
            this.langDisplayMessage.DELETE_FAIL : 'Xóa thất bại',
            Configuration.NotificationType.Error);
        });
      }
    });
  }

  exportPdf() {
    this.exportService.exportPdf(this.getExportColumns(), this.mainItems);
  }

  exportExcel() {
    this.exportService.exportExcel(this.getExportData());
  }

  getExportData() {
    return this.mainItems.map(
      (json) => {
        return new CustomerModel().exportData(json);
      }
    );
  }

  getExportColumns() {
    return this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
}
