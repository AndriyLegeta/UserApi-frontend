import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VampireRoutingModule} from "./vampire-routing.module";
import { VampirePageComponent } from './vampire-page/vampire-page.component';
import { VampireListComponent } from './vampire-list/vampire-list.component';

import {RegisterComponent} from '../register/register.component';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IsloginService} from "../../services/islogin.service";
import {JsonService} from "../../services/json.service";
@NgModule({
  declarations: [VampirePageComponent, VampireListComponent, RegisterComponent,],
  imports: [
    CommonModule,
    VampireRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    IsloginService,
    JsonService
  ]
})
export class VampireModule { }
