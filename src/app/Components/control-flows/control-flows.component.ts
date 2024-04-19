import { CommonModule } from '@angular/common';
import { USERS } from './../../Common/users';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-control-flows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flows.component.html',
  styleUrl: './control-flows.component.css'
})
export class ControlFlowsComponent implements OnInit,AfterViewInit {

  @ViewChild('listItem')
  listItem!: ElementRef;
  @ViewChildren('orderList')
  orderList!: QueryList<any>;
  userList = USERS;
  ngOnInit(): void {
    // this.orderList.nativeElement.style.color = 'red'
  }

  ngAfterViewInit(): void {
    console.log(this.orderList);
    console.log(this.listItem);
    this.listItem.nativeElement.innerText = 'View Child'
    this.orderList.map((item)=>{
      item.nativeElement.style.color = 'red'
    })
  }
}
