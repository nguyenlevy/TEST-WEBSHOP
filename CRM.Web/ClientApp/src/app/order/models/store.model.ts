export class StoreModel {
  id: number;
  name: string;
  displayOrder: number;
  companyName: string;
  companyAddress: string;
  companyPhoneNumber: string;
  companyVat: string;

  fromJson(json: any) {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';
    this.displayOrder = json.displayOrder;
    this.companyName = json.companyName || '';
    this.companyAddress = json.companyAddress || '';
    this.companyPhoneNumber = json.companyPhoneNumber || '';
    this.companyVat = json.companyVat || '';
    return this;
  }
}
