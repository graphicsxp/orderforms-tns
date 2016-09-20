"use strict";
var core_1 = require('@angular/core');
var orderforms_routing_1 = require('./orderforms.routing');
var orderForm_service_1 = require('./service/orderForm-service');
var OrderFormsModule = (function () {
    function OrderFormsModule() {
    }
    OrderFormsModule = __decorate([
        core_1.NgModule({
            imports: [orderforms_routing_1.OrderFormsRoutingModule],
            declarations: [orderforms_routing_1.routedComponents],
            providers: [orderForm_service_1.OrderFormService]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormsModule);
    return OrderFormsModule;
}());
exports.OrderFormsModule = OrderFormsModule;
//# sourceMappingURL=orderforms.module.js.map