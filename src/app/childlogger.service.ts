import { Injectable } from "@angular/core";
// @Injectable()
export class ChildLoggerService {
  constructor() {
    console.log('child logger is constructed')
  }

  log(msg:string){
    console.log('child',msg)
  }
  childLog(){
    console.log('child log')
  }

}
