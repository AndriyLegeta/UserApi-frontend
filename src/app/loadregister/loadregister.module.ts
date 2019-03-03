import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadregisterRoutingModule} from "./loadregister-routing.module";
import { LoadregisterPageComponent } from './loadregister-page/loadregister-page.component';
import { LoadregisterListComponent } from './loadregister-list/loadregister-list.component';

import {RegisterComponent} from '../register/register.component';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IsloginService} from "../../services/islogin.service";
import {JsonService} from "../../services/json.service";
@NgModule({
  declarations: [LoadregisterPageComponent, LoadregisterListComponent, RegisterComponent,],
  imports: [
    CommonModule,
    LoadregisterRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    IsloginService,
    JsonService
  ]
})
export class LoadregisterModule { }
