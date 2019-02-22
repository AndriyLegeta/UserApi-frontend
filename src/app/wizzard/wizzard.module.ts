import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizzardRoutingModule } from './wizzard-routing.module';
import { WizzardPageComponent } from './wizzard-page/wizzard-page.component';

import {LoginComponent} from '../login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IsloginService} from "../../services/islogin.service";
import {JsonService} from "../../services/json.service";


import {UsersComponent} from '../users/users.component';
@NgModule({
  declarations: [WizzardPageComponent, LoginComponent, UsersComponent],
  imports: [
    CommonModule,
    WizzardRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    IsloginService,
    JsonService
  ]
})
export class WizzardModule { }
