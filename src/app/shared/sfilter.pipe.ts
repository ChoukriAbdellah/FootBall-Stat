import { Pipe, PipeTransform } from '@angular/core';
import { SuperHero } from './superheroInterface';

@Pipe({
  name: 'sfilter'
})
export class SfilterPipe implements PipeTransform {

  transform(value: SuperHero[], id: number[]): SuperHero[] {
    return value.filter( superhero => id.includes(superhero.id));
  }

}
