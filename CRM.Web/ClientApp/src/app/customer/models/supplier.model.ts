export class SupplierModel {
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
  taxCode: string;
  note: string;

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
    this.taxCode = json.taxCode || '';
    this.note = json.note || '';
    return this;
  }

  exportData(json: any) {
    if (!json) {
      return null;
    }
    return {
      STT: json.order,
      'Mã NCC': json.customerCode,
      'Tên NCC': json.name,
      'Điện thoại': json.phoneNumber,
      'Địa chỉ': json.address,
      'Lần cuối mua hàng': json.lastOrders,
      'Tổng tiền hàng': json.totalSales,
      'Tiền trả hàng': json.paidAmount,
      Nợ: json.debtAmount
    };
  }
}
