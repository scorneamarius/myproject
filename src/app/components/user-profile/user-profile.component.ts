import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ChosenCompanyService } from '../../services/chosen-company.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: Observable<any[]>;
  constructor(public db: AngularFireDatabase,private cookieService:CookieService,public router:Router, public companyName:ChosenCompanyService) { 
    this.users = db.list('users').valueChanges();
  }
  username=this.cookieService.get('usernameCookie');
  printShoppingBasket=false;
  invert(){
    this.printShoppingBasket=!this.printShoppingBasket;
  }
  ignoreCurrentUser(username):boolean
  {
    if(this.cookieService.get('usernameCookie')==username)
      return false;
    else 
      return true;
  }
  ngOnInit(): void {
  }
  selection(company:string){
    this.companyName.add(company);
    this.router.navigate(['userProfile/buy']);
  }

}
