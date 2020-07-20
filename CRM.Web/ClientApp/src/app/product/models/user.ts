export class User {
  id: number;
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  token: string;

  fromJson(json: any) {
    if (!json) {
      return null;
    }
    this.id = json.id;
    this.username = json.username || '';
    this.firstName = json.firstName || '';
    this.lastName = json.lastName || '';

    return this;
  }
}
