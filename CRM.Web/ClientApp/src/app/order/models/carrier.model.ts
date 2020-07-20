export class CarrierModel {
  id: number;
  name: string;
  description: string;
  displayOrder: number;

  fromJson(json: any) {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';
    this.description = json.description || '';
    this.displayOrder = json.displayOrder;
    return this;
  }
}
