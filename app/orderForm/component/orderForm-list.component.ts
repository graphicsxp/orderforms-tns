import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { IOrderForm } from '../model/orderForm-model';
import { OrderFormDetailComponent } from './orderForm-detail.component';
import { OrderFormService } from '../service/orderForm-service';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: 'orderForm/template/orderForm-list.component.html'
})
export class OrderFormListComponent
    implements OnInit {

    // orderForms: IOrderForm[] = [];
    orderForms: Array<IOrderForm>;
    errorMessage: string;
    deviceStorage: number;
    listLoaded = false
    isLoading = false;


    constructor(private _orderFormService: OrderFormService) {
        console.log('in order form list component');
    }

    ngOnInit(): void {        
                this.isLoading = true;
        
        this._orderFormService.getOrderForms()
            .subscribe(
            orderForms => {
                this.orderForms = orderForms;
                this.listLoaded = true;
                this.isLoading = false;
                // _.chain(this.orderForms).each(function (item) {
                //     console.log(item.costOfBdc);
                // });
            },
            error => this.errorMessage = <any>error
            );

        //File.getFreeDiskSpace().then((res) => { this.deviceStorage  = res; })
    }

    itemSelected(/*item: IOrderForm*/): void {
        console.log('item clicked ');
        // Badge.increase(1);
        // this._navCtrl.push(OrderFormDetailComponent, { id: item.id })
        //let modal = this._modalCtrl.create(OrderFormDetailComponent, item);
        //modal.present();
    }

    openOrderForm(item: IOrderForm): void {
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
    }
}
