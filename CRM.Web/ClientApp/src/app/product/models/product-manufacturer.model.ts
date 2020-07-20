export class ProductManufacturerModel {
  id: number;
  name: string;

  fromJson(json: any): ProductManufacturerModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';

    return this;
  }
}
