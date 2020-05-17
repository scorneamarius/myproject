import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {
 
  constructor(public db:AngularFireDatabase,public cookieService:CookieService){
    db.list('shoppingBasket').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        }); 
   }
 
  currentUsername=this.cookieService.get('usernameCookie');   
  public infoFromDatabase:any[]; 
  
  insertPurchasedItems(info){
    let ok=0;
    this.infoFromDatabase.forEach(elem=>{
      if (elem.username==this.currentUsername && elem.usernameVendor==info.usernameVendor && elem.product==info.product)
      {
        ok=1;
        let key=elem.key;
        this.db.list('shoppingBasket').update(key,{
          amount:info.amount
        })
      }
    });
    if (ok==0){
      this.db.list('shoppingBasket').push({
        username:this.currentUsername,
        usernameVendor:info.usernameVendor,
        amount:info.amount,
        product:info.product,
        price:info.pret,
        address:info.address
      });
      let itemsRef = this.db.list('shoppingBasket');
        itemsRef.snapshotChanges()
          .subscribe(actions => {
            actions.forEach(action => {
              let x =JSON.stringify(action.payload.val());
              let y=JSON.parse(x)
              if(y.username==this.currentUsername)
              {
                this.db.list('shoppingBasket').update(action.key,{key:action.key});
              }
              });
            });
    }
  }
   
}
