export class CategoryModel {
  id: number;
  name: string;
  orderNumber: number;
  parent: number;

  fromJson(json: any): CategoryModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';
    this.orderNumber = json.orderNumber;
    this.parent = json.parentCategoryId;

    return this;
  }
}
