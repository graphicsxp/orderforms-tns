"use strict";
var core_1 = require('@angular/core');
var orderForm_service_1 = require('../service/orderForm-service');
var OrderFormListComponent = (function () {
    function OrderFormListComponent(_orderFormService) {
        this._orderFormService = _orderFormService;
        this.orderForms = [];
        this.listLoaded = false;
        this.isLoading = false;
        console.log('in order form list component');
    }
    OrderFormListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this._orderFormService.getOrderForms()
            .subscribe(function (orderForms) {
            _this.orderForms = orderForms;
            _this.listLoaded = true;
            _this.listLoaded = false;
            // _.chain(this.orderForms).each(function (item) {
            //     console.log(item.costOfBdc);
            // });
        }, function (error) { return _this.errorMessage = error; });
        //File.getFreeDiskSpace().then((res) => { this.deviceStorage  = res; })
    };
    OrderFormListComponent.prototype.itemSelected = function () {
        console.log('item clicked ');
        // Badge.increase(1);
        // this._navCtrl.push(OrderFormDetailComponent, { id: item.id })
        //let modal = this._modalCtrl.create(OrderFormDetailComponent, item);
        //modal.present();
    };
    OrderFormListComponent.prototype.openOrderForm = function (item) {
        console.log('clicking on icon');
        // let fileTransfer: Transfer = new Transfer();
        // // var cordova: any;
        // // const fs:string = cordova.file.dataDirectory;
        // let targetPath = cordova.file.externalDataDirectory + 'myOrderForm.pdf';
        // fileTransfer.download('http://www.sam-dev.net/wp-content/uploads/doc.pdf', targetPath).then((res) => {
        //     console.log('the file was downloaded successfully:' + res);
        //     FileOpener.open(targetPath, 'application/pdf').then((res) => {
        //         console.log('the file was opened successfully:' + res);
        //     }).catch(err => {
        //         console.log('an error occured while opening the file:' + err)
        //     });
        //     Vibration.vibrate(1500);
        // }).catch((err) => {
        //     console.log('an error occured while downloading the file:' + err)
        //     Vibration.vibrate(100);
        // });
    };
    OrderFormListComponent = __decorate([
        core_1.Component({
            templateUrl: 'orderForm/template/orderForm-list.component.html'
        }), 
        __metadata('design:paramtypes', [orderForm_service_1.OrderFormService])
    ], OrderFormListComponent);
    return OrderFormListComponent;
}());
exports.OrderFormListComponent = OrderFormListComponent;
//# sourceMappingURL=orderForm-list.component.js.map