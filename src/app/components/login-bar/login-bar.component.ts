import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  constructor() { }
  printLoginFormComponent2=false;
  printLoginFormComponent=false;
  invertLoginFormComponent2(){
    this.printLoginFormComponent2=!this.printLoginFormComponent2;
  }
  invertLoginFormComponent(){
    this.printLoginFormComponent=!this.printLoginFormComponent;
  }
  switchToLoginFormComponent2(){
    this.printLoginFormComponent=false;
    this.printLoginFormComponent2=true;
  }
  switchToLoginFormComponent(){
    this.printLoginFormComponent=true;
    this.printLoginFormComponent2=false;
  }
  closeLoginFormComponent(){
    this.printLoginFormComponent=false;
  }
  closeLoginFormComponent2(){
    this.printLoginFormComponent2=false;
  }
  ngOnInit(): void {
  }

}
