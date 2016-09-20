"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
// import { LoadingService } from '../../shared/service/loading-service';
var OrderFormService = (function () {
    // private _loadingService: LoadingService;
    function OrderFormService(_http /*, @Inject(LoadingService) loadingService: LoadingService*/) {
        this._http = _http;
        this._orderFormUrl = '/api/orderForms/orderForms.json';
        //this._loadingService  = loadingService;
    }
    OrderFormService.prototype.getOrderForms = function () {
        //this._loadingService.presentLoading();
        console.log('getOrderForms');
        return this._http.get(this._orderFormUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    OrderFormService.prototype.getOrderForm = function (id) {
        return null;
        // return this.getOrderForms()
        //     .map((orderForms: IOrderForm[]) => orderForms.find(p => p.id === id));
    };
    OrderFormService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Service error');
    };
    OrderFormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderFormService);
    return OrderFormService;
}());
exports.OrderFormService = OrderFormService;
//# sourceMappingURL=orderForm-service.js.map