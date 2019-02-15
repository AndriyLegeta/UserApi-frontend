import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VampireRoutingModule} from "./vampire-routing.module";
import { VampirePageComponent } from './vampire-page/vampire-page.component';
import { VampireListComponent } from './vampire-list/vampire-list.component';

@NgModule({
  declarations: [VampirePageComponent, VampireListComponent],
  imports: [
    CommonModule,
    VampireRoutingModule
  ]
})
export class VampireModule { }
