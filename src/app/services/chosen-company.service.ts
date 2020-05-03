import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChosenCompanyService {

  constructor() { }
  chosenCompany = "";
  add(company: string){
    this.chosenCompany = company;
  }
  get(){
    return this.chosenCompany;
  }
  
}
