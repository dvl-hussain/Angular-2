import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mini-child',
  standalone: true,
  imports: [],
  templateUrl: './mini-child.component.html',
  styleUrl: './mini-child.component.css',
  encapsulation:ViewEncapsulation.None
})
export class MiniChildComponent {

}
