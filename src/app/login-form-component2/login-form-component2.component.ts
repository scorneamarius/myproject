import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-component2',
  templateUrl: './login-form-component2.component.html',
  styleUrls: ['./login-form-component2.component.css']
})
export class LoginFormComponent2Component implements OnInit {
  public username="";
  public passwd="";
  constructor() { }
  ngOnInit(): void {
  }
  public afisare()
  {
    console.log(this.username+" "+this.passwd);
  }
}
