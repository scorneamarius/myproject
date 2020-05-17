import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishitemsService {

  constructor() { }
  items = [];

  add(product: string){
    this.items.push(product);
  }

  deleteItem(value){
    const index: number = this.items.indexOf(value);
    this.items.splice(index, 1);
  }
}
