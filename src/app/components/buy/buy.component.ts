import { Component, OnInit , Output} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { ChosenCompanyService } from '../../services/chosen-company.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  users: Observable<any[]>;
  constructor(public db: AngularFireDatabase,public cookieService:CookieService,public shoppingBasket:ShoppingBasketService,public company:ChosenCompanyService) {
    this.users = db.list('users').valueChanges();
  }
  errorMessage="Nu ati introdus date corecte in campul de cumparare sau vanzatorul dvs. nu are destul stoc!";
  error=false;
  onHandleError(){
    this.error=false;
  }
  // nu mai avem nevoie de functia asta pentru ca afisam doar pentru compania selectata
  // ignoreCurrentUser(username):boolean
  // {
  //   if(this.cookieService.get('usernameCookie')==username)
  //     return false;
  //   else 
  //     return true;
  // }
  displayDetails(companyName):boolean
  {
    if(this.company.get() == companyName)
      return true;
    else
      return false;
  }
  addPurchasedItems(info:{username,usernameVendor,product,amount,price,cantitateInitiala,address})
  {
      if(parseInt(info.amount)>=0 && parseInt(info.amount)<=parseInt(info.cantitateInitiala)&&info.amount.length!=0 && info.amount.indexOf(' ')==-1 && info.amount.indexOf('+')==-1)
      {
        this.error=false;
        this.shoppingBasket.insertPurchasedItems(info);
      }
      else
      {
        this.error=true;
        console.log("eroare");
      }
  }
  ngOnInit(): void {
 
  }

}
