import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizzardPageComponent} from "./wizzard-page/wizzard-page.component";

import {UsersComponent} from '../users/users.component';
const routes: Routes = [
  {path:'', component: WizzardPageComponent},
  {path:'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizzardRoutingModule { }
