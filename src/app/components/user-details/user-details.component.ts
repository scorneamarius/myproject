import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-user-details',
  template:
  `
      <div>
        <h1><b>{{company}}</b></h1>
        <p>{{'mere'+' '+mere+" pret:"+pretMere}} <input #inputMere name="mere">  <button (click)=buy(username,inputMere.name,inputMere.value,pretMere,mere)>buy</button></p>
        <p>{{'pere'+' '+pere+' pret:'+pretPere}} <input #inputPere name="pere"> <button (click)=buy(username,inputPere.name,inputPere.value,pretPere,pere)>buy</button></p>
        <p>{{'banane'+' '+banane+' pret:'+pretBanane}} <input #inputBanane name="banane"> <button (click)=buy(username,inputBanane.name,inputBanane.value,pretBanane,banane)>buy</button></p>
        <p>{{'portocale'+' '+portocale+' pret:'+pretPortocale}} <input #inputPortocale name="portocale"> <button (click)=buy(username,inputPortocale.name,inputPortocale.value,pretPortocale,portocale)>buy</button></p>
        <p>{{'cartofi'+' '+cartofi+' pret:'+pretCartofi}} <input #inputCartofi name="cartofi"> <button (click)=buy(username,inputCartofi.name,inputCartofi.value,pretCartofi,cartofi)>buy</button> </p>
        <p>{{'morcovi'+' '+morcovi+' pret:'+pretMorcovi}} <input #inputMorcovi name="morcovi"> <button (click)=buy(username,inputMorcovi.name,inputMorcovi.value,pretMorcovi,morcovi)>buy</button> </p>
      </div>
  `,
  styles:['hr{background-color:black;}h1{text-align:center;}']
})
export class UserDetailsComponent implements OnInit {
 @Output() buyClicked=new EventEmitter<{username,usernameVendor,product,amount,pret,cantitateInitiala,address}>();
 @Input() username:string;
 @Input() company:string;
 @Input() email:string;
 @Input() address:string;
 @Input() mere:string;
 @Input() pere:string;
 @Input() banane:string;
 @Input() cartofi:string;
 @Input() portocale:string
 @Input() morcovi:string;
 @Input() pretMere:string;
 @Input() pretBanane:string;
 @Input() pretPortocale:string;
 @Input() pretPere:string;
 @Input() pretCartofi:string;
 @Input() pretMorcovi:string;
 
 buy(username,fruit,quantity,price,cantitate)
 {
    //  console.log(username+" "+fruit+" "+quantity+' '+price);
    this.buyClicked.emit(
      {
        username:this.cookieService.get('usernameCookie'),
        usernameVendor:username,
        product:fruit,
        amount:quantity,
        pret:price,
        cantitateInitiala:cantitate,
        address:this.address
      }
    );
 }
  constructor(public cookieService:CookieService) {}

  ngOnInit(): void {
  }

}
