import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-container',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './template-container.component.html',
  styleUrl: './template-container.component.css'
})
export class TemplateContainerComponent {
  numbers = [1,2,3,4,5];
  expression = false
}
