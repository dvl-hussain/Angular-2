import { CommonModule } from '@angular/common';
import { Component, Optional, Self, SkipSelf, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ChildLoggerService } from '../childlogger.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[
    {
    provide:LoggerService,
    useClass:ChildLoggerService
  }]

})
export class ChildComponent {
  booleanValue = true;

  // constructor( @Self()private logger:LoggerService){}
  constructor( @SkipSelf() private logger:LoggerService){}

  log(){
    this.logger.log('button is clicked');
  }

}
