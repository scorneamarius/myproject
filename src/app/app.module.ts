import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionFirstPageComponent } from './components/description-first-page/description-first-page.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { LoginFormComponent2Component } from './components/login-form-component2/login-form-component2.component'; 
import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { User} from './classes/users'
import { LoginServiceService } from './services/login-service.service';
import { AfterLoginComponent } from './components/after-login/after-login.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { LoginUserPageComponent } from './components/login-user-page/login-user-page.component';
import { AuthGuard } from './services/auth-guard.service';
import {CookieService} from 'ngx-cookie-service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StockComponent } from './components/stock/stock.component';
import { BuyComponent } from './components/buy/buy.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ShoppingBasketService } from './services/shopping-basket.service';
import { AlertComponent } from './components/alert/alert.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionFirstPageComponent,
    LoginBarComponent,
    LoginFormComponent,
    LoginFormComponent2Component,
    AfterLoginComponent,
    NotPageFoundComponent,
    LoginUserPageComponent,
    UserDetailsComponent,
    UsersComponent,
    UserProfileComponent,
    StockComponent,
    BuyComponent,
    ShoppingBasketComponent,
    AlertComponent,
    OrdersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireModule , 
  ],
  providers: [LoginServiceService,AuthGuard,CookieService,ShoppingBasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
