import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appOrderBy'
})
export class AppOrderByPipe implements PipeTransform {

  transform(array: Array<any>, args: any): Array<any> {
    let flag = true, arg:string = args;
    if (arg === 'date') {
      flag = false;
    }
    array.sort((a: any, b: any) => {
      if (a[arg] < b[arg]) {
        return -1;
      } else if (a[arg] > b[arg]) {
        return 1;
      } else {
        return 0;
      }
    });
    if (flag) {
      return array;
    } else {
      return array.reverse();
    }

  }

}
