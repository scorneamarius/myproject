import { Component, OnInit, ComponentFactoryResolver, Output,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { User } from '../../classes/users';
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public db: AngularFireDatabase,public cookieService:CookieService,public router:Router) {
    this.db.list<User>('users').valueChanges()
      .subscribe(
        data => {  
          this.DBinfo = data;
          this.DBinfo.forEach(
            e=>{
              if(e.username==this.username)
              {
               let nr=1;
               while(nr<=6)
               {
                this.fruitsAndVegetables.pop();
                nr++;
               }
               this.fruitsAndVegetables.push({name:'mere',amount:e.mere,price:e.pretMere});
               this.fruitsAndVegetables.push({name:'pere',amount:e.pere,price:e.pretPere});
               this.fruitsAndVegetables.push({name:'banane',amount:e.banane,price:e.pretBanane});
               this.fruitsAndVegetables.push({name:'portocale',amount:e.portocale,price:e.pretPortocale});
               this.fruitsAndVegetables.push({name:'cartofi',amount:e.cartofi,price:e.pretCartofi});
               this.fruitsAndVegetables.push({name:'morcovi',amount:e.morcovi,price:e.pretMorcovi});
              }
            }
          )
        });
      }
  
  DBinfo:any[];
  username:string;
  key
  fruitsAndVegetables=[];
  error=false;
  errorMessage="Nu ati introdus date corecte in campul stoc sau pret!";
  // // De aici refactorizez
  printList=false;
  update(){
    this.quantity=this.quantity;
  }
  list(){
    this.printList=!this.printList;
  }
  printUpdate=false;
  event=new EventEmitter();
  initStockDetail(productName,quantity,productPrice){
    this.printUpdate=true;
    this.productName=productName;
    this.quantity=quantity;
    this.productPrice=productPrice;
    this.event.emit();
  }
    productName;
    quantity;
    productPrice;
  //   handleInputEvent(obiect:{product,stockValue}){
  //     console.log(obiect.product);
  //     console.log(obiect.stockValue);
  //     this.updateStock(obiect.product,obiect.stockValue);
  //     // this.printStockDetailComponent=false;

  //   }
  //aici se sfarseste
  onHandleError(){
    this.error=false;
  }

  updateStock(nume,cantitate)
  {console.log("updatestock"+" "+nume+" "+cantitate);
    if(cantitate>=0 && cantitate <=9999999999999999 && cantitate.length!=0 && cantitate.indexOf(' ')==-1 && cantitate.indexOf('+')==-1)
    {
        this.error=false;
        if(nume=='mere')
           this.db.list<User>('users').update(this.key,{mere:cantitate});
        else
          if(nume=='pere')
          this.db.list<User>('users').update(this.key,{pere:cantitate});
          else
            if(nume=='banane')
              this.db.list<User>('users').update(this.key,{banane:cantitate});
            else
              if(nume=='portocale')
                this.db.list<User>('users').update(this.key,{portocale:cantitate});
              else
                if(nume=='morcovi')
                  this.db.list<User>('users').update(this.key,{morcovi:cantitate});
                else
                  if(nume=='cartofi')
                    this.db.list<User>('users').update(this.key,{cartofi:cantitate});
    }
    else
    {
      this.error=true;
      console.log(this.error);
    }

  }

  updatePrice(nume,pret)
  {
    
    if(pret>=0 && pret <=999999999999999999999 && pret.length!=0 && pret.indexOf(' ')==-1 && pret.indexOf('+')==-1)
    {
      this.error=false;
      if(nume=='mere')
        this.db.list<User>('users').update(this.key,{pretMere:pret});
      else
        if(nume=='pere')
          this.db.list<User>('users').update(this.key,{pretPere:pret});
        else
          if(nume=='banane')
            this.db.list<User>('users').update(this.key,{pretBanane:pret});
          else
            if(nume=='portocale')
              this.db.list<User>('users').update(this.key,{pretPortocale:pret});
            else
              if(nume=='morcovi')
                this.db.list<User>('users').update(this.key,{pretMorcovi:pret});
              else
                if(nume=='cartofi')
                  this.db.list<User>('users').update(this.key,{pretCartofi:pret});
    }
    else{
      this.error=true;
    }

  }
ngOnInit(){
  this.username=this.cookieService.get('usernameCookie');
  let aux=this.cookieService.get('keyCookie');
  this.key=aux.substring(1,aux.length-1);
}


}
