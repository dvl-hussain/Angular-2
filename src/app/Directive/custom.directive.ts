import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor() {}
  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  @HostBinding('style.color') fontColor: string = 'green';
  @HostBinding('style.fontSize') fontSize: string = '32px';
  @HostBinding('style.width.px') get width(){
    return 400
  }
  @HostListener('mouseenter') onClick() {
    this.backgroundColor = this.backgroundColor === 'red' ? 'yellow' : 'red';
    // this.fontSize = this.fontSize === '32px' ? '20px' : '32px';
  }
}
