import { Pipe, PipeTransform } from "@angular/core";

// ruben | toggleCase  = 'RUBEN'
//RUBEN | toggleCase  = 'ruben'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}