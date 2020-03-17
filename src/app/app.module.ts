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
import{ AngularFireDatabaseModule} from 'angularfire2/database';

import { LoginServiceService } from './login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionFirstPageComponent,
    LoginBarComponent,
    LoginFormComponent,
    LoginFormComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [LoginServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
