// app.routing.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrderFormListComponent } from './component/orderForm-list.component';
import { OrderFormDetailComponent } from './component/orderForm-detail.component';

const routes: Routes = [
    { path: 'order-forms', component: OrderFormListComponent },
    { path: 'order-forms/:id', component: OrderFormDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderFormsRoutingModule { }

export const routedComponents = [OrderFormListComponent, OrderFormDetailComponent];  