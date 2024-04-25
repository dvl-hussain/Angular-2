import { Injectable } from "@angular/core";
// @Injectable()
export class LoggerService {
  constructor() {
    console.log('root logger is constructed')
  }

  log(msg:string){
    console.log('root',msg)
  }
}
