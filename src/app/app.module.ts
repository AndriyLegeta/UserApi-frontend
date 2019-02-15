import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UsersComponent} from './users/users.component';

import {IsloginService} from "../services/islogin.service";
import {JsonService} from "../services/json.service";

import { AppRoutingModule } from './app-routing.module';
import {MainRoutingModule} from "./main-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule
  ],
  providers: [
    IsloginService,
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
