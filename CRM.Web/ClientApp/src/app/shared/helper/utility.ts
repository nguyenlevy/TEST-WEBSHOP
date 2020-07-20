import { SelectItem } from 'primeng/api';
import { OrderStatus } from '../../order/models/order.model';
export default class Utils {
  static parseListDataToOptions(
    listData: any = [],
    isAddFirstEmptyOption: boolean = true,
    label = '',
    value = ''
  ): SelectItem[] {
    let listOptions: SelectItem[] = [];
    if (listData && listData.length > 0) {
      listOptions = listData.map((p) => {
        return {
          value: p.id,
          label: p.name,
        };
      });
      if (isAddFirstEmptyOption) {
        listOptions.unshift({ value, label });
      }
    }
    return listOptions;
  }

  static getOrderStatusName(orderStatusId: number) {
    switch (orderStatusId) {
      case OrderStatus.Finish:
        return 'Hoàn thành';
      case OrderStatus.Cancelled:
        return 'Đã hủy';
      case OrderStatus.Delivery:
        return 'Giao hàng';
      case OrderStatus.Ordered:
        return 'Đã đặt';
      default:
        return '';
    }
  }

  static getOrderStatusOptions() {
    let listOptions: SelectItem[] = [];
    listOptions = Object.keys(OrderStatus).map((o) => {
      return {
        value: o,
        label: this.getOrderStatusName(Number(o)),
      };
    });
    listOptions.unshift({ value: '', label: '' });
    return listOptions;
  }

  static getWeekDates() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const numDay = date.getDate();
    const start = new Date(date);
    start.setDate(numDay - dayOfWeek);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setDate(numDay + (7 - dayOfWeek));
    end.setHours(0, 0, 0, 0);

    return [start, end];
  }

  static getMonthDates() {
    const date = new Date();
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return [start, end];
  }

  static getQuarterDates() {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3);
    const start = new Date(now.getFullYear(), quarter * 3, 1);
    const end = new Date(start.getFullYear(), start.getMonth() + 3, 0);
    return [start, end];
  }
}
