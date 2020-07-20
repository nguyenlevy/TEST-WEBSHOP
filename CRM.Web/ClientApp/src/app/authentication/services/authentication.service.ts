import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BaseService} from '../../shared/services/base.service';
import {User} from '../../product/models/user';
import {Constants, CookieKey} from '../../shared/helper/constants';
import {JsonResultModel} from '../../shared/models/json-result.model';

@Injectable({providedIn: 'root'})
export class AuthenticationService extends BaseService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(http: HttpClient) {
    super(http);
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(CookieKey.CurrentUser)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.doPost(Constants.Login, {username, password})
    .pipe(map((res: JsonResultModel) => {
      const user = res.data;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem(CookieKey.CurrentUser, JSON.stringify(user));
      localStorage.setItem(CookieKey.Token, user.token);
      this.currentUserSubject.next(new User().fromJson(user));
      return user;
    }));
  }

  logout() {
    return this.doPost(Constants.Logout);
  }

  removeCookies() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(CookieKey.CurrentUser);
    localStorage.removeItem(CookieKey.Token);
    this.currentUserSubject.next(null);
  }
}
