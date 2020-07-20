export class ProductStatusModel {
  id: number;
  name: string;

  fromJson(json: any): ProductStatusModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';

    return this;
  }
}
