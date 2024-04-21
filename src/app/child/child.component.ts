import { Component, ViewEncapsulation } from '@angular/core';
import { MiniChildComponent } from '../mini-child/mini-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MiniChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // encapsulation:ViewEncapsulation.None
})
export class ChildComponent {

}
