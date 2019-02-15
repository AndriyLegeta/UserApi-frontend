import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
/*import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";*/

const routes: Routes = [
 /* {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}*/
  {path:'vampire', loadChildren:'./vampire/vampire.module#VampireModule'},
  {path:'wizzard', loadChildren:'./wizzard/wizzard.module#WizzardModule'}
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
