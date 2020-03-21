import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionFirstPageComponent } from './description-first-page/description-first-page.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { LoginFormComponent2Component } from './login-form-component2/login-form-component2.component'; 
import { FormsModule} from '@angular/forms';
import{ AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment';
import{ AngularFireDatabaseModule,} from 'angularfire2/database';

import { LoginServiceService } from './login-service.service';
import { AfterLoginComponent } from './after-login/after-login.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginUserPageComponent } from './login-user-page/login-user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DescriptionFirstPageComponent,
    LoginBarComponent,
    LoginFormComponent,
    LoginFormComponent2Component,
    AfterLoginComponent,
    NotPageFoundComponent,
    UserPageComponent,
    LoginUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireModule 
    

 
  ],
  providers: [LoginServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
