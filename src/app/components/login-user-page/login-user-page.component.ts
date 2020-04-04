import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';
@Component({
  selector: 'app-login-user-page',
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css']
})
export class LoginUserPageComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFireDatabase, public loginService:LoginServiceService) {
    this.items = db.list('/users').valueChanges();
  }

  ngOnInit(): void {
  }

}