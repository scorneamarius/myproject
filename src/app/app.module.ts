import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionFirstPageComponent } from './description-first-page/description-first-page.component';
import { LoginBarComponent } from './login-bar/login-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionFirstPageComponent,
    LoginBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
