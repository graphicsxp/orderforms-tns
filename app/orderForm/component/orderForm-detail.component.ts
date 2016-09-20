import { IOrderForm } from '../model/orderForm-model';
import { Component, OnInit } from  '@angular/core';

@Component({
    templateUrl: 'orderForm/template/orderForm-detail.component.html'    
})
export class OrderFormDetailComponent implements OnInit {
    myOrderForm: IOrderForm;
    errorMessage: string;

    constructor() { }

    ngOnInit(): void {
        // this._orderFormService.getOrderForm(+this._navParams.get('id')).subscribe(
        //     orderForm => this.myOrderForm = orderForm,
        //     error => this.errorMessage = <any>error
        // );
    }

    dismiss() {
        // this._viewCtrl.dismiss();
    }
}