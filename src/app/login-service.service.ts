import { Injectable } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(public _db:AngularFireDatabase){
    _db.list<User>('people').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        });
  }

  infoFromDatabase:User[];
  msg()
  {
    //this._db.list('people').remove('people1');
   // this._db.list('people').update('people2',{
    //  username:'alfre'});
    this.infoFromDatabase.forEach(element => {
      console.log(element.displayName);
      
      
    });
  }

  

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
      this.notWorkingLogin=true;
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