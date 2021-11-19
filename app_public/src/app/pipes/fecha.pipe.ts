import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(fecha: string): string {
    let fechaObj: Date = new Date(fecha);
    let dia = fechaObj.getUTCDate();
    let mes = fechaObj.getUTCMonth() + 1;
    let año = fechaObj.getUTCFullYear();
    let fechaStr: string = dia + "/" + mes + "/" + año;
    return fechaStr;
  }

}
