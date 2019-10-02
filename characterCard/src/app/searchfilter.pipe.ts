import {  Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(skills: any[], filter: string): any {
    if (!skills || !filter) {
      return skills;
    }
    //篩選 skills 陣列，如果skills符合filter條件就會保留，其餘則篩掉
    // filter skills array, skills which match and return true will be
    // kept, false will be filtered out
    return skills.filter(item => item.skillName.indexOf(filter) !== -1);
  }
}