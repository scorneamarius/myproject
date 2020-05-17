import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {User} from '../classes/users';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public infoFromDatabase:User[];
  constructor(public _db:AngularFireDatabase, private cookieService:CookieService){
    _db.list<User>('users').valueChanges()
      .subscribe(
        data => {  
          this.infoFromDatabase = data;
        });
  }
  
  searchResult = "";
  price = 10000;
  username=this.cookieService.get('usernameCookie');
  checkPrice(priceProduct){
    if(priceProduct != 0 && priceProduct < this.price)
      this.price = priceProduct;
  }
  transformSearch(){
    if(this.searchResult == 'apples'){
      this.searchResult = 'mere';
    }
    else if(this.searchResult == 'pears'){
      this.searchResult = 'pere';
    }
    else if(this.searchResult == 'oranges'){
      this.searchResult = 'portocale';
    }
    else if(this.searchResult == 'bananas'){
      this.searchResult = 'banane';
    }
    else if(this.searchResult == 'potatoes'){
      this.searchResult = 'cartofi';
    }
    else if(this.searchResult == 'carrots'){
      this.searchResult = 'morcovi';
    }
  }

  findMinimalPrice(){
    this.transformSearch();
    this.infoFromDatabase.forEach(
      user=>{
        if(user.username != this.username){
          if(this.searchResult == 'mere' && user.mere != '0'){
            this.checkPrice(user.pretMere)
          }
          else if(this.searchResult == 'pere' && user.mere != '0'){
            this.checkPrice(user.pretPere)
          }
          else if(this.searchResult == 'banane' && user.mere != '0'){
            this.checkPrice(user.pretBanane)
          }
          else if(this.searchResult == 'portocale' && user.mere != '0'){
            this.checkPrice(user.pretPortocale)
          }
          else if(this.searchResult == 'cartofi' && user.mere != '0'){
            this.checkPrice(user.pretCartofi)
          }
          else if(this.searchResult == 'morcovi' && user.mere != '0'){
            this.checkPrice(user.pretMorcovi)
          }
      }
      }
    )
  }
  addResult(search:string){
    this.searchResult = search;
  }
  
  getResult(){
    return this.searchResult;
  }

  deleteSearch(){
    this.searchResult = "";
  }
}
