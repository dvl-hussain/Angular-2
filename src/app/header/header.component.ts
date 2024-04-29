import { Component } from '@angular/core';
import { FakeAuthenticationService } from '../Services/fake-authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   isLoggedIn:boolean = true
//  constructor(private auth:AuthenticationService){}
 constructor(private auth:FakeAuthenticationService){}

  login(){
  console.log('Login')
  this.isLoggedIn = false;
  this.auth.isLoggedIn = true;
  ++this.auth.count
  }

  logout(){
    console.log('logout')
    this.isLoggedIn = true;
    this.auth.isLoggedIn = false;
    ++this.auth.count
  }
}
