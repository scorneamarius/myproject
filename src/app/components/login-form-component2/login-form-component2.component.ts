import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login-form-component2',
  templateUrl: './login-form-component2.component.html',
  styleUrls: ['./login-form-component2.component.css']
})
export class LoginFormComponent2Component implements OnInit {

  constructor(public _loginService:LoginServiceService,private router:Router) { }

  nextRoute()
  {
   if (this._loginService.user.verifyLogin()==true)
   {
    this.router.navigate(['/loginUserPage',this._loginService.user.username]);
   }
   else
   {  
    this._loginService.notWorkingLogin=true;
    console.log( this._loginService.notWorkingLogin)
   }

  }


  ngOnInit(): void {
    this._loginService.user.init();
  }
}