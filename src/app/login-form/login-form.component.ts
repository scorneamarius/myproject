import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LoginFormComponent2Component } from '../login-form-component2/login-form-component2.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public _loginService:LoginServiceService,private router:Router) { }
  ngOnInit(): void {
    this._loginService.init();
  }

  
  nextRoute()
  {
   if (this._loginService.verify()==true)
   {
      this._loginService.addToDatabase();
      this.router.navigate(['/loginForm2']);
   }
   else
   {
    this._loginService.notWorkingAutentification=true;
   }

  }

}
