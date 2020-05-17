import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css']
})
export class FrequentQuestionsComponent implements OnInit {

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
