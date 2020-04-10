import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form-component2',
  templateUrl: './login-form-component2.component.html',
  styleUrls: ['./login-form-component2.component.css']
})
export class LoginFormComponent2Component implements OnInit {

  constructor(public _loginService:LoginServiceService,private router:Router,private cookieService:CookieService) { }

  nextRoute()
  {
    if (this._loginService.isCurrentUserAbleToLogin())
    {
      this.router.navigate(['/loginUserPage']); 
      this._loginService.notWorkingLogin=false;
      this.cookieService.set('usernameCookie',this._loginService.current_username);
      this.cookieService.set('passwordCookie',this._loginService.current_password);
    }
    else
    {
      this._loginService.notWorkingLogin=true;
    }
  }


  ngOnInit(): void {
  }
}
