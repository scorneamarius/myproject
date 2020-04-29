import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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

  @Output() closeLoginFormComponent2=new EventEmitter<void>();
  @Output() switch=new EventEmitter<void>();
  onClose(){
    this.closeLoginFormComponent2.emit();
  }
  onSwitch(){
    this.switch.emit();
  }
  nextRoute()
  {
    if (this._loginService.isCurrentUserAbleToLogin())
    {
      this.onClose();
      this.router.navigate(['/userProfile']); 
      this._loginService.notWorkingLogin=false;
      this.cookieService.set('usernameCookie',this._loginService.current_username);
      this.cookieService.set('passwordCookie',this._loginService.current_password);
      this.cookieService.set('keyCookie',this._loginService.getKey(this._loginService.current_username));
      this._loginService.loginMode=true;
      this.cookieService.set('loginModeCookie',JSON.stringify(this._loginService.loginMode));
    }
    else
    {
      this._loginService.notWorkingLogin=true;
    }
  }


  ngOnInit(): void {
    
  }
}
