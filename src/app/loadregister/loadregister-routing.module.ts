import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoadregisterPageComponent} from "./loadregister-page/loadregister-page.component";
import {LoadregisterListComponent} from "./loadregister-list/loadregister-list.component";
import {XxxGuard} from "../guards/xxx.guard";

const routes: Routes = [
  {path:'', component: LoadregisterPageComponent},
  {path:'list', component: LoadregisterListComponent, canActivate:[XxxGuard]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoadregisterRoutingModule { }
