import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]',
  standalone: true
})
export class HighlightColorDirective implements OnChanges {

  @Input({required:true})
  appHighlightColor!:string
  constructor(private el:ElementRef,private renderer : Renderer2) {

   }
  ngOnChanges(): void {
    this.el.nativeElement.style.color = this.appHighlightColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow','10px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('','');
  }

  private highlight(color: string,padding:string) {
    // console.log(this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.el.nativeElement, 'padding', padding);

  }

}
