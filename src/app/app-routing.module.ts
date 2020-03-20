import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DescriptionFirstPageComponent } from './description-first-page/description-first-page.component';
import { LoginFormComponent2Component } from './login-form-component2/login-form-component2.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

const routes: Routes = [
  {path:'loginForm',component: LoginFormComponent},
  {path:'',component: DescriptionFirstPageComponent},
  {path:'descriptionFirstPage',component:DescriptionFirstPageComponent},
  {path:'loginForm2',component:LoginFormComponent2Component},
  {path:'**',component:NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
