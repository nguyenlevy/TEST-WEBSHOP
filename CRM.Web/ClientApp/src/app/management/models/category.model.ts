export class CategoryModel {
  order: number;
  id: number;
  name: string;
  note: string;
  orderNumber: number;
  parentCategoryId: number;
  parentCategoryName: number;

  fromJson(json: any): CategoryModel {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.name = json.name || '';
    this.orderNumber = json.orderNumber;
    this.note = json.note;
    this.parentCategoryId = json.parentCategoryId;
    this.parentCategoryName = json.parentCategoryName;

    return this;
  }
}
