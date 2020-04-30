import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.css']
})
export class DeliveryOptionsComponent implements OnInit {

  constructor(public loginService:LoginServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  back(){
    if (this.loginService.loginMode == true)
    {
      this.router.navigate(['/userProfile']);
    }
    else
    {
      this.router.navigate(['/descriptionFirstPage']);
    }
  }

}
