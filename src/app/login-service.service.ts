import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { User } from 'firebase';
//import {User} from './users'
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
      users:User[];
      public infoFromDatabase:User[];

getCustomers(user:User)
{

  this.infoFromDatabase.forEach(elem=>console.log(elem));
  
}
 

  msg()
  { 
    //this._db.list('people').remove('people1');
   // this._db.list('people').update('people2',{
    //  username:'alfre'});
    this.infoFromDatabase.forEach(element => {
      console.log(element);
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

  username:string;
  password:string;
  company:string;
  address:string;
  email:string;
  firstName:string;
  lastName:string;
  notWorkingAutentification:boolean
  notWorkingLogin:boolean
  


  init(){
      this.username='';
      this.password='';
      this.company='';
      this.address='';
      this.email='';
      this.firstName='';
      this.lastName='';
      this.notWorkingAutentification=false;
      this.notWorkingLogin=false;
  }
  verify():boolean // aici trebuie sa verificam daca utilizatorul
  {               // indeplineste conditiile pentru a crea un cont nou!
      return true;
  }
  verifyLogin():boolean // aici verificam daca in baza de date se afla username-ul
  {                     // si parola
    return true;
  }
  addToDatabase(){
    this._db.list('users').push
    (
      {
        displayName:this.username,
        password:this.password,
        company:this.company,
        address:this.address,
        email:this.email,
        firstName:this.firstName,
        lastName:this.lastName
      }
      );
  }
 
  
  verifyUsername():boolean{
      if (this.username=='') return false;
      return true;
  }
  verifyPassword():boolean{
      if(this.password=='') return false;
      return true;
  }
  verifyCompany():boolean{
    if (this.company=='') return false;
    return true;
  }
  verifyAddress():boolean{
    if(this.address=='') return false;
    return true;
  }
  verifyEmail():boolean{
    if(this.email=='') return false;
    return true;
  }
  verifyFirstName():boolean{
    if(this.firstName=='') return false;
    return true;
  }
  verifyLastName():boolean{
    if(this.lastName=='') return false;
    return true;
  }
  isOk():boolean{
    if(this.verifyUsername() && this.verifyPassword() && this.verifyLastName() 
      && this.verifyFirstName() && this.verifyEmail() && this.verifyCompany() && this.verifyAddress())
        return true;
    return false;
  }
  printDatabaseInfo()
  {
    console.log(this.infoFromDatabase);
  }
}