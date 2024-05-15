import { Component } from "@angular/core";

@Component({
    selector:'app-success-alert',
    templateUrl:'./success-alert.component.html',
    styles:[`p{
        color:green;
    }`,`.numColor{color:white;}`]
})

export class SuccessAlertComponent{
isShow=false;
number=0;
logNumbers=[];
toggleDisplay(){
    this.isShow=!this.isShow;
    this.logNumbers.push(new Date());
}
}