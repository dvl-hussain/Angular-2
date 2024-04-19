import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './Directive/custom.directive';
import { TemplateProjectionComponent } from './template-projection/template-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CustomDirective,TemplateProjectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prop:string = ''
}
