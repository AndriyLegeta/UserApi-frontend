import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadloginRoutingModule } from './loadlogin-routing.module';
import { LoadloginPageComponent } from './loadlogin-page/loadlogin-page.component';

import {LoginComponent} from '../login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IsloginService} from "../../services/islogin.service";
import {JsonService} from "../../services/json.service";


import {UsersComponent} from '../users/users.component';
@NgModule({
  declarations: [LoadloginPageComponent, LoginComponent, UsersComponent],
  imports: [
    CommonModule,
    LoadloginRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    IsloginService,
    JsonService
  ]
})
export class LoadloginModule { }
