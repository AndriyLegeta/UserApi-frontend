import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizzardRoutingModule } from './wizzard-routing.module';
import { WizzardPageComponent } from './wizzard-page/wizzard-page.component';

@NgModule({
  declarations: [WizzardPageComponent],
  imports: [
    CommonModule,
    WizzardRoutingModule
  ]
})
export class WizzardModule { }
