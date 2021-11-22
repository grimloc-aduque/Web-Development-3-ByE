import { Pipe, PipeTransform } from '@angular/core';
import { Direccion } from '../interfaces/interfaces';

@Pipe({
  name: 'direccion'
})
export class DireccionPipe implements PipeTransform {

  transform(dir: Direccion): string {
    let dirString: string = '';
    dirString = dirString.concat(
      dir.calle_principal,
      ' & ',
      dir.calle_secundaria,
      ' N# ',
      dir.numero_casa,
      '. ',
      dir.ciudad,
      '. Ref:',
      dir.referencia
    );

    return dirString;
  }
}
