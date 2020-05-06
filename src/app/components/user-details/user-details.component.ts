import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SearchService } from '../../services/search.service';
import { ChosenCompanyService } from '../../services/chosen-company.service';




@Component({
  selector: 'app-user-details',
  template:
  `
      <div *ngIf="checkForCompany()">
        <h1><b>{{company}}</b></h1>
        <table>
          <tr>
            <td><img src="assets/images/mere.png" width="250px" height="250px"></td>
            <td>Name of the product:<b> apples</b><br/>Available quantity: <b>{{ mere }}</b><br/>Price: <b>{{ pretMere }} RON/kg</b><br/>
            The desired amount: <input #inputMere name="mere">
            <br/><button (click)=buy(username,inputMere.name,inputMere.value,pretMere,mere)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
            <td><img src="assets/images/pere.png" width="250px" height="250px"></td>
            <td>Name of the product: <b>pears</b><br/>Available quantity: <b>{{ pere }}</b><br/>Price: <b>{{ pretPere }} RON/kg</b><br/>
            The desired amount: <input #inputPere name="pere">
            <br/><button (click)=buy(username,inputPere.name,inputPere.value,pretPere,pere)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
            <td><img src="assets/images/banane.png" width="250px" height="250px"></td>
            <td>Name of the product: <b>bananas</b><br/>Available quantity: <b>{{ banane }}</b><br/>Price: <b>{{ pretBanane }} RON/kg</b><br/>
            The desired amount: <input #inputBanane name="banane">
            <br/><button (click)=buy(username,inputBanane.name,inputBanane.value,pretBanane,banane)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
          </tr>
          <tr>
            <td><img src="assets/images/portocale.png" width="250px" height="250px"></td>
            <td>Name of the product: <b>oranges</b><br/>Available quantity: <b>{{ portocale }}</b><br/>Price: <b>{{ pretPortocale }} RON/kg</b><br/>
            The desired amount: <input #inputPortocale name="portocale">
            <br/><button (click)=buy(username,inputPortocale.name,inputPortocale.value,pretPortocale,portocale)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
            <td><img src="assets/images/cartofi.png" width="250px" height="250px"></td>
            <td>Name of the product: <b>potatoes</b><br/>Available quantity: <b>{{ cartofi }}</b><br/>Price: <b>{{ pretCartofi }} RON/kg</b><br/>
            The desired amount: <input #inputCartofi name="cartofi">
            <br/><button (click)=buy(username,inputCartofi.name,inputCartofi.value,pretCartofi,cartofi)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
            <td><img src="assets/images/morcovi.png" width="250px" height="250px"></td>
            <td>Name of the product: <b>carrots</b><br/>Available quantity: <b>{{ morcovi }}</b><br/>Price: <b>{{ pretMorcovi }} RON/kg</b><br/>
            The desired amount: <input #inputMorcovi name="morcovi">
            <br/><button (click)=buy(username,inputMorcovi.name,inputMorcovi.value,pretMorcovi,morcovi)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
          </tr>
        </table>
      </div>
      <div *ngIf="checkForSearchResult() && this.currentUsername != username">
        <div *ngIf="this.searchService.searchResult == 'mere' && this.searchService.price.toString() == pretMere">
        <table>
        <tr>
        <td><img src="assets/images/mere.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> apples</b><br/>Available quantity: <b>{{ mere }}</b><br/>Price: <b>{{ pretMere }} RON/kg</b><br/>
            The desired amount: <input #inputMere name="mere">
            <br/><button (click)=buy(username,inputMere.name,inputMere.value,pretMere,mere)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>

        <div *ngIf="this.searchService.searchResult == 'pere' && this.searchService.price.toString() == pretPere" >
        <table>
        <tr>
        <td><img src="assets/images/pere.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> pears</b><br/>Available quantity: <b>{{ pere }}</b><br/>Price: <b>{{ pretPere }} RON/kg</b><br/>
            The desired amount: <input #inputPere name="pere">
            <br/><button (click)=buy(username,inputPere.name,inputPere.value,pretPere,pere)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>

        <div *ngIf="this.searchService.searchResult == 'portocale' && this.searchService.price.toString() == pretPortocale" >
        <table>
        <tr>
        <td><img src="assets/images/portocale.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> oranges</b><br/>Available quantity: <b>{{ portocale }}</b><br/>Price: <b>{{ pretPortocale }} RON/kg</b><br/>
            The desired amount: <input #inputPortocale name="portocale">
            <br/><button (click)=buy(username,inputPortocale.name,inputPortocale.value,pretPortocale,portocale)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>

        <div *ngIf="this.searchService.searchResult == 'banane' && this.searchService.price.toString() == pretBanane" >
        <table>
        <tr>
        <td><img src="assets/images/banane.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> bananas</b><br/>Available quantity: <b>{{ banane }}</b><br/>Price: <b>{{ pretBanane }} RON/kg</b><br/>
            The desired amount: <input #inputBanane name="banane">
            <br/><button (click)=buy(username,inputBanane.name,inputBanane.value,pretBanane,banane)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>

        <div *ngIf="this.searchService.searchResult == 'cartofi' && this.searchService.price.toString() == pretCartofi" >
        <table>
        <tr>
        <td><img src="assets/images/cartofi.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> potatoes</b><br/>Available quantity: <b>{{ cartofi }}</b><br/>Price: <b>{{ pretCartofi }} RON/kg</b><br/>
            The desired amount: <input #inputCartofi name="cartofi">
            <br/><button (click)=buy(username,inputCartofi.name,inputCartofi.value,pretCartofi,cartofi)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>

        <div *ngIf="this.searchService.searchResult == 'morcovi' && this.searchService.price.toString() == pretMorcovi" >
        <table>
        <tr>
        <td><img src="assets/images/morcovi.png" width="300px" height="250px"></td>
            <td>Name of the company:<b>{{ company }}</b><br/>Name of the product:<b> carrots</b><br/>Available quantity: <b>{{ morcovi }}</b><br/>Price: <b>{{ pretMorcovi }} RON/kg</b><br/>
            The desired amount: <input #inputMorcovi name="morcovi">
            <br/><button (click)=buy(username,inputMorcovi.name,inputMorcovi.value,pretMorcovi,morcovi)><b><i class="icon-shopping-cart"></i>Buy</b></button>
            </td>
        </tr>
        </table>
        </div>
      </div>
  `,
  styles:['hr{background-color:black;}h1{text-align:center;}tr,td{font-size:13px;}']
})
export class UserDetailsComponent implements OnInit {
 @Output() buyClicked=new EventEmitter<{username,usernameVendor,product,amount,pret,cantitateInitiala,address}>();
 @Input() username:string;
 @Input() company:string;
 @Input() email:string;
 @Input() address:string;
 @Input() mere:string;
 @Input() pere:string;
 @Input() banane:string;
 @Input() cartofi:string;
 @Input() portocale:string
 @Input() morcovi:string;
 @Input() pretMere:string;
 @Input() pretBanane:string;
 @Input() pretPortocale:string;
 @Input() pretPere:string;
 @Input() pretCartofi:string;
 @Input() pretMorcovi:string;

 currentUsername=this.cookieService.get('usernameCookie');
 
 buy(username,fruit,quantity,price,cantitate)
 {
    //  console.log(username+" "+fruit+" "+quantity+' '+price);
    this.buyClicked.emit(
      {
        username:this.cookieService.get('usernameCookie'),
        usernameVendor:username,
        product:fruit,
        amount:quantity,
        pret:price,
        cantitateInitiala:cantitate,
        address:this.address
      }
    );
 }
//  functia check afiseaza toate produsele daca am ales una dintre optiunile de la dropdown  button sau doar produsul cu pretul cel mai ieftin
 checkForCompany(){
   if(this.chosenCompany.chosenCompany != "" && this.searchService.searchResult == "")
      return true;
   else
    return false;
 }
 checkForSearchResult(){
  if(this.chosenCompany.chosenCompany == "" && this.searchService.searchResult != "")
     return true;
  else
   return false;
}
  constructor(public cookieService:CookieService, public searchService:SearchService, public chosenCompany:ChosenCompanyService) {}

  ngOnInit(): void {
  }

}
