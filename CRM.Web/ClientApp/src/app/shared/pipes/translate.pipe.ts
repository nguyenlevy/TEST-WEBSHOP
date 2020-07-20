import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {
  }

  transform(parentKey: string, key: string): string {
    let data = '';
    if (parentKey) {
      data = this.translate.data[parentKey];
    }
    if (data && key) {
      data = data[key] || key;
    }
    return data;
  }
}
