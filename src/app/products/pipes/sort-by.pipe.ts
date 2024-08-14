import { Pipe, PipeTransform } from '@angular/core';
import { Smartphone } from '../interfaces/smartphone.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( smartphones: Smartphone[], sortBy?: keyof Smartphone | '' ): Smartphone[] {

    switch( sortBy ) {

      case 'brand':
        return smartphones.sort( (a,b) => ( a.brand > b.brand ) ? 1 : -1 );

      case 'model':
        return smartphones.sort( (a,b) => ( a.model > b.model ) ? 1 : -1 );

      case 'price':
        return smartphones.sort( (a,b) => ( a.price > b.price ) ? 1 : -1 );

      case 'color':
        return smartphones.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );

      case 'has5G':
        return smartphones.sort( (a,b) => ( a.has5G > b.has5G ) ? 1 : -1 );

      default:
        return smartphones;
    }
  }
}
