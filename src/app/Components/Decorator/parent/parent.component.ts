import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { USERS } from '../../../Common/users';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers:[ChildComponent]
})
export class ParentComponent implements OnInit {


  marks:number = 0;
  score: number = 50;
  @ViewChild('accessChild')
  childCom!: ChildComponent;
  userList = USERS;

  constructor(){

  }
  ngOnInit(): void {
  }

  receiveData(data: number) {
    this.score = data;
  }
  plusFive() {
    this.childCom.increaseFive();
  }
  minusFive() {
    this.childCom.decreaseFive()
  }

  getValueFromChild(event:any){
    console.log(event)
  }
}
