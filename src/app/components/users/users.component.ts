import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({ 
  selector: 'app-users',
  template: 
  `
  <ul>
    <li *ngFor="let user of users | async">
      <app-user-details [username]=user.username 
                        [company] =user.company
                        [email]=user.email
                        [address]=user.address>
      </app-user-details>
    </li>
  </ul>

  `,
})
export class UsersComponent implements OnInit {

  users: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.users = db.list('users').valueChanges();
  }

  ngOnInit(): void {
  }

}
