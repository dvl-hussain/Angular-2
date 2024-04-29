import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
  standalone: true
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
     const shortName = value.split(' ')
     console.log(shortName[0][0] + shortName[1][0])
    return shortName[0][0] + shortName[1][0];
  }

}
