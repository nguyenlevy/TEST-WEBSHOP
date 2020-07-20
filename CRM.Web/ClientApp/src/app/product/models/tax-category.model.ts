export class TaxCategoryModel {
  id: number;
  name: string;

  fromJson(json: any): TaxCategoryModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';

    return this;
  }
}
