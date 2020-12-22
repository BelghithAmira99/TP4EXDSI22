import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'super'
})
export class SuperPipe implements PipeTransform {

  transform(nom:string):string {
    return 'Bienvenue au supermarché "'+nom+'"';
  }

}
