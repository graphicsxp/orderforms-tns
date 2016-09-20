"use strict";
// app.routing.ts
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var orderForm_list_component_1 = require('./component/orderForm-list.component');
var orderForm_detail_component_1 = require('./component/orderForm-detail.component');
var routes = [
    { path: 'order-forms', component: orderForm_list_component_1.OrderFormListComponent },
    { path: 'order-forms/:id', component: orderForm_detail_component_1.OrderFormDetailComponent }
];
var OrderFormsRoutingModule = (function () {
    function OrderFormsRoutingModule() {
    }
    OrderFormsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormsRoutingModule);
    return OrderFormsRoutingModule;
}());
exports.OrderFormsRoutingModule = OrderFormsRoutingModule;
exports.routedComponents = [orderForm_list_component_1.OrderFormListComponent, orderForm_detail_component_1.OrderFormDetailComponent];
//# sourceMappingURL=orderforms.routing.js.map