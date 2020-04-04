import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {User} from '../classes/users'
import {Observable} from 'rxjs'
import {filter} from 'rxjs/operators'
import { timingSafeEqual } from 'crypto';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(public _db:AngularFireDatabase){
    _db.list<User>('users').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        });

      }
      user:User;
      public infoFromDatabase:User[];
      notWorkingAutentification=false;
      notWorkingLogin=false;

      addToDatabase(){
        this._db.list('users').push
        (
          {
            username:this.user.username,
            password:this.user.password,
            company:this.user.company,
            address:this.user.address,
            email:this.user.email,
            firstName:this.user.firstName,
            lastName:this.user.lastName
          }
          );
      }
 

  msg()
  { 
    //this._db.list('people').remove('people1');
   // this._db.list('people').update('people2',{
    //  username:'alfre'});
    this.infoFromDatabase.forEach(element => {
      console.log(element.username);
    });
  }

  /*getUsers(): Observable<User[]> {
    return this._db.list<User>('users').valueChanges();
  }
  getUser(key: string): Observable<User> { 
    return this._db.object<User>('users/' + key).valueChanges(); // returneaza userul cu cheia respectiva
  }*/


 /* getKeyFromUser($key:string)
  {
   return this._db.list<User>('users').valueChanges().pipe(filter(user => user.username==="ceva"));
  }*/

 
  printDatabaseInfo()
  {
    console.log(this.infoFromDatabase);
  }
}