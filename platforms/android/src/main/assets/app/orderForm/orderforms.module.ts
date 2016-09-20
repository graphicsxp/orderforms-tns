import { NgModule } from '@angular/core';

import { OrderFormsRoutingModule, routedComponents } from './orderforms.routing';
import { OrderFormService } from './service/orderForm-service';

@NgModule({
  imports: [OrderFormsRoutingModule],
  declarations: [routedComponents],
  providers: [OrderFormService]
})
export class OrderFormsModule { }  
