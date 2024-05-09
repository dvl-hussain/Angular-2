import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = "";
  password = "";

  constructor(private authService:AuthService,private router:Router){}

  submit(){
      let loginObj = {
        email:this.email,
        password:this.password
      }

      this.authService.login(loginObj).subscribe(res=>{
        alert('Successfully login')
        this.router.navigate(['/'])
      })

  }
}
