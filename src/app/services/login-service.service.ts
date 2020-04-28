import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {User} from '../classes/users'
import {Observable} from 'rxjs'
import {filter} from 'rxjs/operators'
import { timingSafeEqual } from 'crypto';
import { element } from 'protractor';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
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

      username="";
      password="";
      company="";
      address="";
      email="";
      firstName="";
      lastName="";
      key="";

      // the next variables are used for current user that is trying to connect
      current_username="";
      current_password="";
      loginMode=false; // starea userului , daca e sau nu logat
      // the next functions are used to check if the current user is able to login
      //------------------------------------------------------------------------
      checkIfTheCurrentUsernameIsAbleToLogin():boolean
      {
        let ok=0;
        if (this.current_username=="")
        {
          return false; 
        }
        else
        {
          this.infoFromDatabase.forEach(
            user=>{
              if(user.username==this.current_username)
              {
                ok=1;
              }
            }
          )
        }
        return (ok==1);
      }
      checkIfTheCurrentPasswordIsAbleToLogin():boolean
      {
        let ok=0;
        if (this.current_password=="")
        {
          return false; 
        }
        else
        {
          this.infoFromDatabase.forEach(
            user=>{
              if(user.password==this.current_password)
              {
                ok=1;
              }
            }
          )
        }
        return (ok==1);
      }
      isCurrentUserAbleToLogin():boolean
      {
        if(
          this.checkIfTheCurrentPasswordIsAbleToLogin()==true &&
          this.checkIfTheCurrentUsernameIsAbleToLogin()==true
        )
        {
          this.loginMode=true;
           return true;
        }
        return false;
      }
      printDatabaseInfo()
      {
        console.log(this.infoFromDatabase);
      }
      checkUsername():boolean
      { let ok=0;
        this.infoFromDatabase.forEach(element => {
         if(element.username==this.username || this.username==""){
           ok=1;
         }
        });
        if (ok==0) return true;
          else
            return false;
      } 
      checkPassword():boolean
      { let ok=0;
        this.infoFromDatabase.forEach(element => {
         if(element.password==this.password || this.password==""){
           ok=1;
         }
        });
        if (ok==0) return true;
        else
          return false;
      }
      checkEmail():boolean
      { let ok=0;
        this.infoFromDatabase.forEach(element => {
         if(element.email==this.email || this.email==""){
           ok=1;
         }
        });
        if (ok==0) return true;
        else
          return false;
      } 
      checkCompany():boolean
      { let ok=0;
        this.infoFromDatabase.forEach(element => {
         if(element.company==this.company || this.company==""){
           ok=1;
         }
        });
        if (ok==0) return true;
        else
            return false;
      } 
      checkAddress():boolean
      {
        if (this.address=="")
          return false;
        else
          return true;
      } 
      checkFirstName():boolean
      {
        if (this.firstName=="")
          return false;
        else
          return true;
      } 
      checkLastName():boolean
      {
        if (this.lastName=="")
          return false;
        else
          return true;
      } 
      checkAllInformation():boolean
      {               
          if(
            this.checkAddress()   ==true &&
            this.checkCompany()   ==true &&
            this.checkEmail()     ==true &&
            this.checkFirstName() ==true &&
            this.checkUsername()  ==true &&
            this.checkPassword()  ==true &&
            this.checkLastName()  ==true
          )
            {
              this.addToDatabase();
              return true;
            }
          this.notWorkingAutentification=true;
          return false;
      }
      addToDatabase(){
        this._db.list('users').push
        (
          {
            username:this.username,
            password:this.password,
            company:this.company,
            address:this.address,
            email:this.email,
            firstName:this.firstName,
            lastName:this.lastName,
            mere:0,
            pere:0,
            portocale:0,
            morcovi:0,
            cartofi:0,
            banane:0,
            pretMere:0,
            pretPere:0,
            pretBanane:0,
            pretPortocale:0,
            pretMorcovi:0,
            pretCartofi:0
          }
        );
        // let's push the key inside of the user
        let itemsRef = this._db.list('users');
        itemsRef.snapshotChanges()
          .subscribe(actions => {
            actions.forEach(action => {
              let x =JSON.stringify(action.payload.val());
              let y=JSON.parse(x)
              if(y.username==this.username)
              {
                this._db.list('users').update(action.key,{key:action.key});
                this.key=action.key;
              }
              });
            });
        }
        getKey(username):string
        { 
          let ok=0;
          let aux;
          this.infoFromDatabase.forEach(
            user=>
            {
              if(user.username==username)
              {
                ok=1;
                aux= (JSON).stringify(user.key);
              }
            }
          )
         if(ok==0) 
            console.log("Nu a fost gasita cheia pentru username-ul "+username);
          else
          return aux;
        }
      }
    
 
          

  // msg()
  // { 
  //   //this._db.list('people').remove('people1');
  //  // this._db.list('people').update('people2',{
  //   //  username:'alfre'});

  //   this.infoFromDatabase.forEach(element => {
  //       if(element.username=='fredi')
  //         console.log(element.username+" "+element.password);
  //   });
  // }
  // pushInfoToUser(){
  //   this.user.username=this.username;
  //   this.user.password=this.password;
  //   this.user.company=this.company;
  //   this.user.address=this.address;
  //   this.user.email=this.address;
  //   this.user.firstName=this.firstName;
  //   this.user.lastName=this.lastName;
  // }
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

 
