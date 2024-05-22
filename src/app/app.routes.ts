import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadChildren:() => import('../app/home/home.routes').then(c => c.HOME_ROUTE)
  }

];
