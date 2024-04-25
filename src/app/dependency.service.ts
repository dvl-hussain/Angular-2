import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
let counter = 0;
@Injectable()
export class DependencyService {
  http: HttpClient;
  id: number;
  constructor(http: HttpClient) {
    this.http = http;
    counter++;
    this.id = counter
  }
}
