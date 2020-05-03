import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-description-first-page',
  templateUrl: './description-first-page.component.html',
  styleUrls: ['./description-first-page.component.css']
})
export class DescriptionFirstPageComponent implements OnInit {

  constructor(public cookieService:CookieService,public router:Router,public loginService:LoginServiceService) { }

  ngOnInit(): void {
    
   this.cookieService.set('loginModeCookie',JSON.stringify(this.loginService.loginMode));

    if (this.cookieService.get('loginModeCookie')=='true')
    {
      this.router.navigate(['/userProfile']);
    } 
    console.log(this.cookieService.get('loginModeCookie'));
  }
 

}
