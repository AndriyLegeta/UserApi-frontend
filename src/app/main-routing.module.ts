import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path:'loadregister', loadChildren:'./loadregister/loadregister.module#LoadregisterModule'},
  {path:'loadlogin', loadChildren:'./loadlogin/loadlogin.module#LoadloginModule'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MainRoutingModule { }
