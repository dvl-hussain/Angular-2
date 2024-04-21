import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ParentComponent {

}
