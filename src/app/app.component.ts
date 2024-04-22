import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { HighlightColorDirective } from './highlight-color.directive';
import { CommonModule } from '@angular/common';
import { CustomStructuralDirective } from './custom-structural.directive';
  interface Colors {
    name:string;
    color:string;
    isPrimary:boolean;
  }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ParentComponent,HighlightColorDirective,CommonModule,CustomStructuralDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  prop:string = '';
  highLightText:string= '';
  colorArray: Colors[] =  [
    { color: "red", name: "crimson", isPrimary: true },
    { color: "blue", name: "navy", isPrimary: true },
    { color: "green", name: "emerald", isPrimary: true },
    { color: "yellow", name: "goldenrod", isPrimary: false },
    { color: "orange", name: "tangerine", isPrimary: false }
];
styleObject = {
  'font-style':  'italic' ,
  'font-weight': 'bold' ,
  'font-size': '28px'
};
  condition:boolean = true;

}
