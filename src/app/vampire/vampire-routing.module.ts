import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VampirePageComponent} from "./vampire-page/vampire-page.component";
import {VampireListComponent} from "./vampire-list/vampire-list.component";
import {XxxGuard} from "../guards/xxx.guard";

const routes: Routes = [
  {path:'', component: VampirePageComponent},
  {path:'list', component: VampireListComponent, canActivate:[XxxGuard]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VampireRoutingModule { }
