import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { OrderFormsRoutingModule, routedComponents } from './orderforms.routing';
import { OrderFormService } from './service/orderForm-service';

@NgModule({
  imports: [OrderFormsRoutingModule, CommonModule],
  declarations: [routedComponents],
  providers: [OrderFormService]
})
export class OrderFormsModule { }  
