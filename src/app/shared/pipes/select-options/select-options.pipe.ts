import { Pipe, PipeTransform } from '@angular/core';
import { ISelectOptions } from '../../components/select/select.component';

/**
 * @params
 * Primeiro parâmetro é o campo que vai representar a label do select
 * Segundo parâmetro é o campo que vai representar o real valor do select
 *
 * @use
 * [options]="products$ | async | selectOptions:'name':'_id'"
 */
@Pipe({
  name: 'selectOptions'
})
export class SelectOptionsPipe implements PipeTransform {

  transform<T>(value: T[] | null, ...args: string[]): ISelectOptions[] {
    if(!Array.isArray(value)) return [];

    const [label, valueSelect] = args;

    if(!label || !valueSelect) throw new Error('[SelectOptionsPipe] - Invalid params');

    return value.map((item:any) => {
      return { label: `${item[label]}`, value: `${item[valueSelect]}`}
    } )
  }

}
