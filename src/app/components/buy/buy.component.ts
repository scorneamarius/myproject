import { Component, OnInit , Output} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  users: Observable<any[]>;
  constructor(public db: AngularFireDatabase,public cookieService:CookieService) {
    this.users = db.list('users').valueChanges();
  }

  ignoreCurrentUser(username):boolean
  {
    if(this.cookieService.get('usernameCookie')==username)
      return false;
    else 
      return true;
  }
  purchasedItems=[]; // elementele in acest vector vor fi JSON-uri cu 4 campuri
  addPurchasedItems(info:{usernameVendor,product,quantity,price})
  {
      this.purchasedItems.push(info);
      console.log(this.purchasedItems);
  }
  ngOnInit(): void {
 
  }

}
