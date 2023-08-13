import { Pipe, PipeTransform } from '@angular/core';
import { ISelectOptions } from '../../components/select/select.component';

@Pipe({
  name: 'selectOptionsFilter'
})
export class SelectOptionsFilterPipe implements PipeTransform {

  transform(options: ISelectOptions[], term: string): ISelectOptions[] {
    return options.filter(({label}) => label.includes(term));
  }

}
