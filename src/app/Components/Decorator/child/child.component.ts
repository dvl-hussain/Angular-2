import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit , AfterViewInit{
   marks:number = 0;
  @Input()value:number = 0;
  @Input()userData:any = {}
  @Output() dataEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output()emitValue:EventEmitter<any> = new EventEmitter();
  sentDataToApp:any []= [];
  constructor(){

  }
  ngAfterViewInit(): void {
    // this.sentDataToApp.push(this.userData)
  }
  ngOnInit(): void {
    this.sentDataToApp.push(this.userData)
    console.log(this.sentDataToApp);
  }

  sendData(){
    ++this.value
   this.dataEvent.emit(this.value);
   this.emitValue.emit('Output')
  }

  increaseFive(){
    this.marks += 5;
    console.log(this.marks)
  }
  decreaseFive(){
    if(this.marks > 0){
      this.marks -= 5;
    }

    console.log(this.marks)
  }

  consoleData(){
    return this.sentDataToApp
  }
}
