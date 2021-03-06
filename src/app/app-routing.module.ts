import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionFirstPageComponent } from './components/description-first-page/description-first-page.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { LoginUserPageComponent } from './components/login-user-page/login-user-page.component';
import { AuthGuard } from './services/auth-guard.service';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {FooterComponent} from './components/footer/footer.component';
import { TcComponent } from './components/tc/tc.component';
import { DeliveryOptionsComponent} from './components/delivery-options/delivery-options.component';
import { FrequentQuestionsComponent} from './components/frequent-questions/frequent-questions.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StockComponent } from './components/stock/stock.component';
import { BuyComponent } from './components/buy/buy.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
  {path:'stock',component:StockComponent},
  {path:'userProfile',canActivate:[AuthGuard],component:UserProfileComponent,
    children:[
      {path:'stock',component:StockComponent},
      {path:'buy',component:BuyComponent},
      {path:'orders',component:OrdersComponent},
      {path:'shoppingBasket',component:ShoppingBasketComponent},
      {path:'wishlist',component:WishlistComponent}
  ]},
  {path:'users',component:UsersComponent},
  {path:'',component: DescriptionFirstPageComponent},
  {path:'descriptionFirstPage',component:DescriptionFirstPageComponent},
  {path:'tc', component:TcComponent},
  {path:'deliveryOptions', component:DeliveryOptionsComponent},
  {path: 'frequentQuestions', component:FrequentQuestionsComponent},
  {path:'loginUserPage',component:LoginUserPageComponent},
  {path:'**',component:NotPageFoundComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
