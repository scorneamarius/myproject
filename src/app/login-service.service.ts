import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from './users';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user : User;
  constructor(public _db:AngularFireDatabase){}
  
  public getUser(){
    return this.user;
  }
  getUsername()
  {
    return this.user.username;
  }

}
