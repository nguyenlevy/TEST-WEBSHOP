export class EmployeeModel {
  id: number;
  name: string;

  fromJson(json: any) {
    if (!json) {
      return null;
    }

    this.id = json.id;
    this.name = json.name || '';

    return this;
  }
}
