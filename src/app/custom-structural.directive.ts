import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]',
  standalone: true
})
export class CustomStructuralDirective {
   @Input() set appCustomStructural(condition:boolean){
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainerRef.clear()
    }

   }
  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

}
