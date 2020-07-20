export class CustomerModel {
  id: number;
  order: number;
  customerCode: string;
  name: string;
  phoneNumber: string;
  address: string;
  lastOrders: Date;
  totalSales: number;
  paidAmount: number;
  debtAmount: number;
  email: string;
  birthday: Date;
  gender: number;

  fromJson(json: any) {
    if (!json) {
      return null;
    }
    this.id = json.id || 0;
    this.name = json.name || '';
    this.customerCode = json.customerCode || '';
    this.phoneNumber = json.phoneNumber || '';
    this.address = json.address || '';
    this.lastOrders = json.lastOrders;
    this.totalSales = parseInt(json.totalSales, 10) || 0;
    this.paidAmount = parseInt(json.paidAmount, 10) || 0;
    this.debtAmount = parseInt(json.debtAmount, 10) || 0;
    this.email = json.email || '';
    this.birthday = json.birthday;
    this.gender = parseInt(json.gender, 10) || 1;
    return this;
  }

  exportData(json: any) {
    if (!json) {
      return null;
    }
    return {
      STT: json.order,
      'Mã KH': json.customerCode,
      'Tên KH': json.name,
      'Điện thoại': json.phoneNumber,
      'Địa chỉ': json.address,
      'Lần cuối mua hàng': json.lastOrders,
      'Tổng tiền hàng': json.totalSales,
      'Tiền trả hàng': json.paidAmount,
      Nợ: json.debtAmount
    };
  }
}
