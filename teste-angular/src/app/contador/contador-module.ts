import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing-module';
import { Conta } from './conta/conta';


@NgModule({
  declarations: [
    Conta
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
