import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [],
})
export class AppComponent implements OnInit  {
  a = 1;
  b = 2;
  c = 3;

  ngOnInit(): void {
       this.a = this.b;
       this.b = this.c;
       this.c = this.a
       console.log( this.a,this.b,this.c)
  }


}
