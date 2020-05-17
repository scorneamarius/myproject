import { Component, OnInit } from '@angular/core';
import { WishitemsService } from 'src/app/services/wishitems.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  task: string;
  tasks = [];
  constructor(public wishService:WishitemsService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.tasks.push({name: this.task});
    this.wishService.add(this.task);
    this.task = '';
  }

}
