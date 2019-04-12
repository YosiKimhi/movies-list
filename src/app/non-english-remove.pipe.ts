import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonEnglishRemove'
})
export class NonEnglishRemovePipe implements PipeTransform {
  // This pipe removes all non english letters 
  transform(value: any) {
    return value.replace(/[^A-Za-z0-9\s]/g, '');
  }

}
