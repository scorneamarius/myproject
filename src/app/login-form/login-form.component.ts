import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import {User} from '../users';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public user:User;
  constructor(private _loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.user=this._loginService.getUser();
  }
  afis()
  {
    console.log(this.user.username);
  }

}
