import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './Services/authentication.service';
import { FakeAuthenticationService } from './Services/fake-authentication.service';
import { HeaderComponent } from './header/header.component';
import { ShortNamePipe } from './Pipes/short-name.pipe';
import { TruncatePipe } from './Pipes/truncate.pipe';


 const APP_CONFIG = Object.freeze({
    name:'Tom',
    age:29
 })

 export const APP_CONFIG_TOKEN = new InjectionToken<any>('app_Config')
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,ShortNamePipe,TruncatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers:[
    {
    provide:AuthenticationService,
    useClass:AuthenticationService
    },
    {
    provide:FakeAuthenticationService,
    useExisting:AuthenticationService
    },
    // {
    // provide:'APP_CONFIG',
    // useValue:APP_CONFIG
    // },
    {
    provide:APP_CONFIG_TOKEN,
    useValue:APP_CONFIG
    },
    {
    provide:'APP_Factory',
    useValue:false
    },
    {
      provide:AuthenticationService,
      useFactory:(isTest:boolean)=> isTest ? new FakeAuthenticationService : new AuthenticationService,
      deps:['APP_Factory']
      }
 ]
})
export class AppComponent implements OnInit {

     constructor(private authService:AuthenticationService,
      //  @Inject('APP_CONFIG') app_Config:any
       @Inject(APP_CONFIG_TOKEN) app_UseValue:any
      ){
      console.log(app_UseValue)
     }
  ngOnInit(): void {
    this.authService.inti();

  }

  printResult(){
    console.log(this.authService.isLoggedIn);
    console.log('print Count',this.authService.count);
  }



}
