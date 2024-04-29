import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length:number, symbol:string): string {

    const truncateString = value.split(' ').splice(0,length).join(' ') + symbol
    return truncateString;
  }

}
