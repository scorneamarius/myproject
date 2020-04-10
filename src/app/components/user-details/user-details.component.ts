import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  template:
  `
      <ul class="list-group">
        <li class="list-group-item active">{{username}}</li>
        <li class="list-group-item">{{company}}</li>
        <li class="list-group-item">{{email}}</li>
        <li class="list-group-item">{{address}}</li>
      </ul> 
  `
})
export class UserDetailsComponent implements OnInit {

 @Input() username:string;
 @Input() company:string;
 @Input() email:string;
 @Input() address:string;

  constructor() {}

  ngOnInit(): void {
  }

}
