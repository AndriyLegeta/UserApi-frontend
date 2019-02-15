import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizzardPageComponent} from "./wizzard-page/wizzard-page.component";

const routes: Routes = [
  {path:'', component: WizzardPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizzardRoutingModule { }
