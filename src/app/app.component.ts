import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowsComponent } from './Components/control-flows/control-flows.component';
import { ParentComponent } from './Components/Decorator/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './Directive/custom.directive';
import { ChildComponent } from './Components/Decorator/child/child.component';
import { USERS } from './Common/users';
import { User } from './Common/user-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ControlFlowsComponent,ParentComponent,FormsModule,CustomDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prop:string = ''

  @ViewChild(ParentComponent)parentCompo!:ParentComponent;
  @ViewChild(ChildComponent)childCompo!:ChildComponent;
  userListData:User[] = USERS;

  showInfo(){
   console.log(this.parentCompo.userList);
   console.log(this.childCompo.consoleData());
   this.userListData.push({ "name": "lean", "age": 40, "gender": "male", "salary": 70000, "joining": "2023-02-18" });
   console.log(this.userListData)
  }
}
