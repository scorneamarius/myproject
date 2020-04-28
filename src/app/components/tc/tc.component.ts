import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {

  constructor(public loginService:LoginServiceService, public router:Router) { }

  ngOnInit(): void {
  }
  
  back(){
    if (this.loginService.loginMode == true)
    {
        // this.router.navigate(['/userProfile']);
        this.router.navigate(['/descriptionFirstPage']);
    }
    else
    {
      this.router.navigate(['/descriptionFirstPage']);
    }
  }
}
