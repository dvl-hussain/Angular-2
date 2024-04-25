import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { DependencyService } from '../dependency.service';
import { ChildComponent } from '../child/child.component';
import { ParentLoggerService } from '../parentlogger.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  providers:[{
    provide:LoggerService,
    useClass:ParentLoggerService
  }],
  encapsulation:ViewEncapsulation.ShadowDom
})

export class CourseCardComponent {

   constructor(private dependSrv:DependencyService){
    // console.log('Course card component',this.dependSrv.id)
   }

}
