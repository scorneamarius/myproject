import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DescriptionFirstPageComponent } from './description-first-page/description-first-page.component';

const routes: Routes = [
  {path:'loginForm',component: LoginFormComponent},
  {path:'',component: DescriptionFirstPageComponent},
  {path:'descriptionFirstPage',component:DescriptionFirstPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
