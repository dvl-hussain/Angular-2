import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: any) {
    console.log(value)
    // const truncateString = value.split(' ').splice(0,length).join(' ') + symbol
    // return truncateString;
  }

}
