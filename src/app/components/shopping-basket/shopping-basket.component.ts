import { Component, OnInit, Input } from '@angular/core';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { Observable } from 'rxjs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingBasket } from '../../classes/shoppingBasket';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../classes/users'
@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  usersShoppingBasket: Observable<any[]>;
  infoFromDatabase:User[];
  infoFromShoppingBasket:ShoppingBasket[];
  constructor(public db:AngularFireDatabase,public cookieService:CookieService){
    this.usersShoppingBasket = db.list('shoppingBasket').valueChanges();
    db.list<ShoppingBasket>('shoppingBasket').valueChanges()
      .subscribe(
        data => {  
          this.totalPrice=0;
          this.infoFromShoppingBasket = data;
          this.infoFromShoppingBasket.forEach(elem=>{
            if(elem.username==this.cookieService.get('usernameCookie'))
            {
              this.totalPrice=this.totalPrice+parseInt(elem.amount)*parseInt(elem.price);
            }
          });
        });
    db.list<User>('users').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        });
  }
  totalPrice;
  error=false;
  errorMessage:string='Vanzatorul dvs nu are indeajuns stoc!'
  onHandleError(){
    this.error=false;
  }
  checkUser(username):boolean
  {
    if(username==this.cookieService.get('usernameCookie'))
    {
      return true;
    }
    else
      return false;
  }
  add(key,cantitate,vendor,product){
    this.infoFromDatabase.forEach(user=>{
      if(user.username==vendor)
      {
        let cantitateParseInt=parseInt(cantitate);
        if(product=='mere')
        {
          if(cantitateParseInt+1<= parseInt(user.mere))
          {
            this.error=false;
            this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
          }
          else
          {
            this.error=true;
          }
        }
        else
          if(product=='pere')
          {
            if(cantitateParseInt+1<= parseInt(user.pere))
            {
              this.error=false;
              this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
            }
            else
            {
              this.error=true;
            }
          }
          else
            if(product=='banane')
            {
              if(cantitateParseInt+1<= parseInt(user.banane))
              {
                this.error=false;
                this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
              }
              else
              {
                this.error=true;
              }
            }
            else
              if(product=='morcovi')
              {
                if(cantitateParseInt+1<= parseInt(user.morcovi))
                {
                  this.error=false;
                  this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
                }
                else
                {
                  this.error=true;
                }
              }
              else
                if(product=='cartofi')
                {
                  if(cantitateParseInt+1<= parseInt(user.cartofi))
                  {
                    this.error=false;
                    this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
                  }
                  else
                  {
                    this.error=true;
                  }
                }
                else
                  if(product='portocale')
                  {
                    if(cantitateParseInt+1<= parseInt(user.portocale))
                    {
                      this.error=false;
                      this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt+1});
                    }
                    else
                    {
                      this.error=true;
                    }
                  }
      }
    });
  }
  comanda(){
    let keys=[];
    this.infoFromShoppingBasket.forEach(elem=>{
      if(elem.username==this.cookieService.get('usernameCookie'))
      { 
        let allMonth=['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
        let date=new Date();
        let day=JSON.stringify(date.getDate());
        let month=allMonth[date.getMonth()];
        let year=JSON.stringify(date.getFullYear());
        let fullDay:string=day+month+year;
        let vendor=elem.usernameVendor;
        let produs=elem.product;
        let cantitate=parseInt(elem.amount);
        this.db.list('orders').push({
          cumparator:this.cookieService.get('usernameCookie'),
          vanzator:vendor,
          produs:produs,
          cantitate:cantitate,
          pret:parseInt(elem.price)*cantitate,
          address:elem.address,
          time:fullDay
        });
        keys.push(elem.key);
        this.infoFromDatabase.forEach(user=>{
          if(user.username==vendor)
          {
            if(produs=='mere')
            {
              let cantitateMere=parseInt(user.mere);
              cantitateMere=cantitateMere-cantitate;
              let keyParseString=(user.key).substring(0,(user.key).length);
              this.db.list('users').update(keyParseString,{mere:cantitateMere});
            }
            else
            {
              if(produs=='pere')
              {
                let cantitatePere=parseInt(user.pere);
                cantitatePere=cantitatePere-cantitate;
                let keyParseString=(user.key).substring(0,(user.key).length);
                this.db.list('users').update(keyParseString,{pere:cantitatePere});
              }
              else
              {
                if(produs=='banane')
                {
                  let cantitateBanane=parseInt(user.banane);
                  cantitateBanane=cantitateBanane-cantitate;
                  let keyParseString=(user.key).substring(0,(user.key).length);
                  this.db.list('users').update(keyParseString,{banane:cantitateBanane});
                }
                else
                {
                  if(produs=='portocale')
                  {
                    let cantitatePortocale=parseInt(user.portocale);
                    cantitatePortocale=cantitatePortocale-cantitate;
                    let keyParseString=(user.key).substring(0,(user.key).length);
                    this.db.list('users').update(keyParseString,{portocale:cantitatePortocale});
                    console.log()
                  }
                  else
                  {
                    if(produs=='morcovi')
                    {
                      let cantitateMorcovi=parseInt(user.morcovi);
                      cantitateMorcovi=cantitateMorcovi-cantitate;
                      let keyParseString=(user.key).substring(0,(user.key).length);
                      this.db.list('users').update(keyParseString,{morcovi:cantitateMorcovi});
                    }
                    else
                    {
                      if(produs=='cartofi')
                      {
                        let cantitateCartofi=parseInt(user.cartofi);
                        cantitateCartofi=cantitateCartofi-cantitate;
                        let keyParseString=(user.key).substring(0,(user.key).length);
                        this.db.list('users').update(keyParseString,{cartofi:cantitateCartofi});
                      }
                    }
                  }
                }
              }
            }
          }
        });this.deleteKeys(keys);
      }
    });
    // keys.forEach(key=>{
    //   // console.log(key);
    //   this.delete(key);
    // });
    this.deleteKeys(keys);
  }
  decrese(key,cantitate){
    let cantitateParseInt=parseInt(cantitate);
    if(cantitateParseInt!=0)
    {
      this.db.list('shoppingBasket').update(key,{amount:cantitateParseInt-1});
    }
        
  }
  deleteKeys(keys)
  {
    keys.forEach(element => {
      console.log(element);
      this.db.list('shoppingBasket').remove(element);
    });
  }
  delete(key){
    console.log(key)
    this.db.list('shoppingBasket').remove(key);
  }
  ngOnInit(): void {
  }


}


