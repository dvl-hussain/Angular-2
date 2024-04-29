import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn: boolean = false;
  count:number = 0;
  constructor() { }

  inti(){
    console.log('This is a real authentication service')
  }
}
