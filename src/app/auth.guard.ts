import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

   let authSrv  = inject(AuthService);
   let router  = inject(Router)
    console.log(authSrv)
    if(!authSrv.isLoggedIn()){
      router.navigate(['/login'])
      return false
    }
  return true;
};
