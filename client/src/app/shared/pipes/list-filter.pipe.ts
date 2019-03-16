import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(wordsList: any, searchStr: string, fieldName: string): any {
    if (!wordsList.length || !searchStr) {
      return wordsList;
    }

    let str = '(to) ' + searchStr;

    return wordsList.filter((word) => (!word[fieldName].indexOf(searchStr)) || word[fieldName].indexOf(str) !== -1);
  }

}
