import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly  JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser!:string;
  private   isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // private http = inject(HttpClient)

  constructor(private http: HttpClient, private router:Router) { }

  login(user:{email:string,password:string}):Observable<any>{
   return this.http.post('https://api.escuelajs.co/api/v1/auth/login', user).pipe(tap((tokens:any)=> this.doLoginUser(user.email,tokens.access_token)))
  }

  private doLoginUser(email:string,jwtToken:any){
     this.loggedUser = email;
     this.storeJwtToken(jwtToken)
     this.isAuthenticatedSubject.next(true)
  }

  private storeJwtToken(jwt:string){
    localStorage.setItem(this.JWT_TOKEN,jwt)
  }

  logOut(){
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['login'])
  }

  getAuthUser(){
    return this.http.get('https://api.escuelajs.co/api/v1/auth/profile',)
  }

  isLoggedIn(){
    return !!localStorage.getItem('JWT_TOKEN')
  }
}
