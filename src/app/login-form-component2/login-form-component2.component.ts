import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-form-component2',
  templateUrl: './login-form-component2.component.html',
  styleUrls: ['./login-form-component2.component.css']
})
export class LoginFormComponent2Component implements OnInit {
  user:User;
  constructor(public _loginService:LoginServiceService) { }/*public _loginService:LoginServiceService*/

  ngOnInit(): void {
    this.user=this._loginService.getUser();
  }
}
