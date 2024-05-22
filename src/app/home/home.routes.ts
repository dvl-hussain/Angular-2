import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
export const HOME_ROUTE: Routes = [

      {
        path:'',
        component:HomeComponent,
        children :[
             { path:'',redirectTo:'profile',pathMatch:'full'},
             {
               path:'profile',
               loadComponent:()=> import('./profile/profile.component').then(c=> c.ProfileComponent)
             },
             {
              path:'account',
              loadComponent:()=> import('./accounts/accounts.component').then(c=> c.AccountsComponent)
            }
        ]
      }
];
