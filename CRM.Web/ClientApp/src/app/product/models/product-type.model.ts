export class ProductTypeModel {
  id: number;
  name: string;

  fromJson(json: any): ProductTypeModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';

    return this;
  }
}
