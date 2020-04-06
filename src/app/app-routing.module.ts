import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DescriptionFirstPageComponent } from './components/description-first-page/description-first-page.component';
import { LoginFormComponent2Component } from './components/login-form-component2/login-form-component2.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { LoginUserPageComponent } from './components/login-user-page/login-user-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path:'loginForm',component: LoginFormComponent},
  {path:'',component: DescriptionFirstPageComponent},
  {path:'descriptionFirstPage',component:DescriptionFirstPageComponent},
  {path:'loginForm2',component:LoginFormComponent2Component},
  {path:'loginUserPage/:username',canActivate:[AuthGuard],/*canActivateChild:[AuthGuard],*/component:LoginUserPageComponent,
  children:[{path:':ceva',component:NotPageFoundComponent}]},
  {path:'**',component:NotPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
