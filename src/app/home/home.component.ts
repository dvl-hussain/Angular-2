import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user:any

  constructor(private authSrv:AuthService, private router:Router){

  }
  ngOnInit(): void {

      // console.log(res)
      this.authSrv.getAuthUser().subscribe((res:any)=>{
        console.log(res)
        this.user = res
      })
    }


    logout(){
      this.authSrv.logOut()
    }
}
