import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private loginService:LoginServiceService, private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean> | Promise <boolean> | boolean
        {
             if(this.loginService.loginMode==true)
             {
                this.loginService.loginMode=false;
                 return true;
                 
             }
             else
             {
                 this.router.navigate(['/descriptionFirstPage'])
             }
        }
        canActivateChild(route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot):Observable<boolean> | Promise <boolean> | boolean
            {
                return true;
            }
}