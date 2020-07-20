import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
    CommonModule
  ],
  entryComponents: []
})

export class AuthenticationModule {
}
