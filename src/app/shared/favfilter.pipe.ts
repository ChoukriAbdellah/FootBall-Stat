import { Pipe, PipeTransform } from '@angular/core';
import { SuperHero } from './superheroInterface';

@Pipe({
  name: 'favfilter'
})
export class FavfilterPipe implements PipeTransform {

  transform(value: SuperHero[], id: number[]): SuperHero[] {
    return value.filter( superhero => superhero.favorite === true);
  }

}
