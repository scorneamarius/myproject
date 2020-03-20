import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from './users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*public peopleInfo :any[];*/
  /*public db:AngularFireDatabase;*/
  constructor(public db:AngularFireDatabase)
  {
   /* db.list('people').valueChanges().subscribe(data => {  this.peopleInfo = data; console.log(this.peopleInfo); });*/
  }
  faceva (){
    this.db.list('people/people3/username').push("randomName");
  }
}
