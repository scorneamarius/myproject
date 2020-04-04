import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { LoginFormComponent2Component } from '../login-form-component2/login-form-component2.component';
import { Router } from '@angular/router';
import {User} from '../../classes/Users';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public _loginService:LoginServiceService,private router:Router) { }
  
  user=this._loginService.user;
  
  
  ngOnInit(): void {
   // this._loginService.initUser();
  }
 
  
  nextRoute()
  {
    if (this._loginService.checkAllInformation()==true)
    {
        this.router.navigate(['/loginForm2']); 
    }
    else
      console.log("false");
  }

}
