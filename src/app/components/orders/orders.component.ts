import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Observable<any[]>;
  constructor(public db:AngularFireDatabase,public cookieService:CookieService) {
    this.orders = db.list('orders').valueChanges();
   }
   checkUser(vanzator):boolean
   {
     if(vanzator==this.cookieService.get('usernameCookie'))
     {
       return true;
     }
     else
       return false;
   }
  ngOnInit(): void {
  }

}
