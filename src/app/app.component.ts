import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements AfterViewInit {

  prop:string = 'sending';



  @ViewChild(ParentComponent)parent!:ParentComponent;
  @ViewChild('parentReference',{read:ElementRef})parent_2!:ElementRef;
  @ViewChild('title')
  title!: ElementRef;
   reg = new RegExp(/[a-zA-Z]+/g)
   text = "how's life is 35going on?";

  ngAfterViewInit(): void {
    this.parent.log();
    console.log(this.parent_2.nativeElement)
    this.parent_2.nativeElement.style.color = 'green'
    this.title.nativeElement.style.color = 'blue'
    console.log("title:",  this.title.nativeElement);
    this.outputString()
  }

  inputValue:string = "how's life is Going on?"
  inputValue2:string = "how's life is 1 3 45 going on?"
  outputString(){
    const splitValue = this.inputValue.split(" ");
     splitValue.forEach((el,index)=> {
        if(splitValue[index] === 'on?'){
           splitValue[index] = 'on';
        }
     })
    // console.log(this.inputValue2)
    console.log(this.inputValue2.match(/\S+/g))
      console.log(this.splitText(this.text,this.reg))
  }


 splitText(text: string, pattern:any)  {
    if (!text) {
        return null
    }
    return text.match(pattern)
}




}
