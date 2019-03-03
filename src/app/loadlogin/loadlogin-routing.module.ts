import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadloginPageComponent} from "./loadlogin-page/loadlogin-page.component";

import {UsersComponent} from '../users/users.component';
const routes: Routes = [
  {path:'', component: LoadloginPageComponent},
  {path:'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadloginRoutingModule { }
