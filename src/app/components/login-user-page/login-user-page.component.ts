import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login-user-page',
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css']
})
export class LoginUserPageComponent implements OnInit {

  users: Observable<any[]>;
  private cookieValue:string;
  constructor(cookieService:CookieService,db: AngularFireDatabase) {
    this.users = db.list('users').valueChanges();
  }

  ngOnInit(): void {
    
  }

}
