import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {User} from '../classes/users'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 infoFromDatabase:User[];
  constructor(public db:AngularFireDatabase){
    db.list<User>('users').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        });
  }
}
