import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DescriptionFirstPageComponent } from './components/description-first-page/description-first-page.component';
import { LoginFormComponent2Component } from './components/login-form-component2/login-form-component2.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { LoginUserPageComponent } from './components/login-user-page/login-user-page.component';
import { AuthGuard } from './services/auth-guard.service';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {FooterComponent} from './components/footer/footer.component';
import { TcComponent } from './components/tc/tc.component';
import { DeliveryOptionsComponent} from './components/delivery-options/delivery-options.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'loginForm',component: LoginFormComponent},
  {path:'',component: DescriptionFirstPageComponent},
  {path:'descriptionFirstPage',component:DescriptionFirstPageComponent},
  {path:'loginForm2',component:LoginFormComponent2Component},
  {path:'loginUserPage',canActivate:[AuthGuard],component:LoginUserPageComponent,children:[{path:':ceva',component:NotPageFoundComponent}]},
  {path:'tc', component:TcComponent},
  {path:'deliveryOptions', component:DeliveryOptionsComponent},
  {path:'**',component:NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
