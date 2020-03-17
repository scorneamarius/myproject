import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LoginFormComponent2Component } from '../login-form-component2/login-form-component2.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public _loginService:LoginServiceService) { }
  ngOnInit(): void {
  }
  verify()
  {
    this.db.list('people/people3/username').push("randomName");
  }

}
