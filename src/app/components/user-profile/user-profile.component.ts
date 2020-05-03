import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private cookieService:CookieService,public router:Router,public loginService:LoginServiceService) { }
  username=this.cookieService.get('usernameCookie');
  printShoppingBasket=false;
  close(){

    this.printShoppingBasket=false;
  }
  invert(){
    this.printShoppingBasket=!this.printShoppingBasket;
  }
 
  logout(){
    this.loginService.loginMode=false;
    this.cookieService.set('loginModeCookie',JSON.stringify(this.loginService.loginMode));
    console.log(this.cookieService.get('loginModeCookie'));
    this.router.navigate(['/descriptionFirstPage']);
  }
  
  ngOnInit(): void {
    this.loginService.loginMode=true;
    this.cookieService.set('loginModeCookie',JSON.stringify(this.loginService.loginMode));
    console.log(this.cookieService.get('loginModeCookie'));
  }

}
