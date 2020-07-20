import {Component, OnInit} from '@angular/core';
import {Configuration} from '../../../../shared/helper/constants';
import {OrderModel, OrderType} from '../../../models/order.model';
import {ConfirmationService, DialogService} from 'primeng/api';
import {TranslateService} from '../../../../shared/services/translate.service';
import {Router} from '@angular/router';
import {ExportService} from '../../../../shared/services/export.service';
import {Title} from '@angular/platform-browser';
import {OrderService} from '../../../services/order.service';

declare function Notify(message, status): any;

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  mainItems: OrderModel[] = [];
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
              private orderService: OrderService,
              private titleService: Title) {
    this.langDisplay = this.translateService.get(['TAB_TITLE', 'ORDER', 'BUTTONS', 'NOTIFICATION']).then((res: any) => {
      if (res) {
        titleService.setTitle(res.TAB_TITLE.ORDER);
        this.langDisplay = res.ORDER;
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
        field: 'orderCode',
        header: this.langDisplay && this.langDisplay.ORDER_CODE ? this.langDisplay.ORDER_CODE : 'Mã phiếu',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains'
      },
      {
        field: 'saleDate',
        header: this.langDisplay && this.langDisplay.SALE_DATE ? this.langDisplay.SALE_DATE : 'Ngày bán',
        width: '10%',
        sort: true
      },
      {
        field: 'customerName',
        header: this.langDisplay && this.langDisplay.CUSTOMER_NAME ? this.langDisplay.CUSTOMER_NAME : 'Khách hàng/ Nhà CC',
        width: '15%',
        sort: true,
        filterMatchMode: 'contains'
      },
      {
        field: 'sellerName',
        header: this.langDisplay && this.langDisplay.SELLER_NAME ? this.langDisplay.SELLER_NAME : 'Thu ngân',
        width: '10%',
        sort: true
      },
      {
        field: 'storeName',
        header: this.langDisplay && this.langDisplay.STORE_NAME ? this.langDisplay.STORE_NAME : 'Cửa hàng',
        width: '10%',
        sort: true,
        filterMatchMode: 'contains'
      },
      {
        field: 'orderStatusName',
        header: this.langDisplay && this.langDisplay.ORDER_STATUS_NAME ? this.langDisplay.ORDER_STATUS_NAME : 'Trạng thái',
        width: '15%',
        sort: true
      },
      {
        field: 'orderTotal',
        header: this.langDisplay && this.langDisplay.ORDER_TOTAL ? this.langDisplay.ORDER_TOTAL : 'Tổng tiền',
        width: '10%',
        sort: true
      },
      {
        field: 'orderDebt',
        header: this.langDisplay && this.langDisplay.ORDER_DEBT ? this.langDisplay.ORDER_DEBT : 'Nợ',
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
    this.orderService.get()
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

  delete(id) {
    this.confirmationService.confirm({
      message: this.langDisplayMessage && this.langDisplayMessage.CONFIRM_DELETE_MESSAGE ?
        this.langDisplayMessage.CONFIRM_DELETE_MESSAGE : 'Bạn chắc chắn muốn xóa dòng này?',
      header: this.langDisplayMessage && this.langDisplayMessage.CONFIRM_TITLE ?
        this.langDisplayMessage.CONFIRM_TITLE : 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.orderService.delete(id)
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

  edit(id: number, orderType: OrderType) {
    switch (orderType) {
      case OrderType.Order:
        this.orderItem(id);
        break;
      case OrderType.Sale:
        this.saleItem(id);
        break;
      case OrderType.ReturnSupplier:
        this.returnSupplier(id);
        break;
      default:
        break;
    }
  }

  orderItem(id: number = 0) {
    this.router.navigate(['app/orders/order-item'], {queryParams: {orderId: id}});
  }

  saleItem(id: number = 0) {
    this.router.navigate(['app/orders/sale-item'], {queryParams: {orderId: id}});
  }

  returnSupplier(id: number = 0) {
    this.router.navigate(['app/orders/return-supplier'], {queryParams: {orderId: id}});
  }
}
