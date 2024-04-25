import {Component, InjectionToken, Optional} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DependencyService } from './dependency.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { LoggerService } from './logger.service';

function dependencyServiceProviderFactory(http:HttpClient): DependencyService {
  return new DependencyService(http);
}
const DEPENDENCY_SERVICE_TOKEN = new InjectionToken<DependencyService>("DEPENDENCY_SERVICE_TOKEN");
// useFactory:dependencyServiceProviderFactory,
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule,CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[{
  //   provide:DEPENDENCY_SERVICE_TOKEN,
  //   useFactory:dependencyServiceProviderFactory,
  //   deps:[HttpClient]
  // }]
  // providers:[{
  //   provide:DependencyService,
  //   useClass:DependencyService,
  //   deps:[HttpClient]
  // }],
  providers:[DependencyService,{
    provide:LoggerService,
    useClass:LoggerService
  }]
})
export class AppComponent  {
    // Using Factory function
  // constructor(@Inject(DEPENDENCY_SERVICE_TOKEN)  private dependSrv: DependencyService){ console.log('provider Factory Function')}
  constructor(private dependSrv: DependencyService){
    // if(this.dependSrv){
    //   console.log('App component',this.dependSrv.id)
    // }

  }

}
