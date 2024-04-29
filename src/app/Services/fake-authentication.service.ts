import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthenticationService {
  isLoggedIn: boolean = false;
  count:number = 0;
  constructor() { }

  inti(){
    console.log('This is a fake authentication service for testing ')
  }

  logging(){
    console.log('Logging Fake service')
  }
}
