import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(skills: any[], filter: string): any {
    if (!skills || !filter) {
      return skills;
    }
    // filter skills array, skills which match and return true will be
    // kept, false will be filtered out
    return skills.filter(item => item.skillName.indexOf(filter) !== -1);
  }
}