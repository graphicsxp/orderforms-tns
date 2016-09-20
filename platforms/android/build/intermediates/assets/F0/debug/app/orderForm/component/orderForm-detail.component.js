"use strict";
var core_1 = require('@angular/core');
var OrderFormDetailComponent = (function () {
    function OrderFormDetailComponent() {
    }
    OrderFormDetailComponent.prototype.ngOnInit = function () {
        // this._orderFormService.getOrderForm(+this._navParams.get('id')).subscribe(
        //     orderForm => this.myOrderForm = orderForm,
        //     error => this.errorMessage = <any>error
        // );
    };
    OrderFormDetailComponent.prototype.dismiss = function () {
        // this._viewCtrl.dismiss();
    };
    OrderFormDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'orderForm/template/orderForm-detail.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderFormDetailComponent);
    return OrderFormDetailComponent;
}());
exports.OrderFormDetailComponent = OrderFormDetailComponent;
//# sourceMappingURL=orderForm-detail.component.js.map