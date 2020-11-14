import { Pipe, PipeTransform } from '@angular/core';
import { SuperHero } from './superheroInterface';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: SuperHero) {
    let avgPowerstats = 0;
    Object.values(value.powerstats).forEach(val => avgPowerstats += val * 5 / 600);

    let html = '';
    const trunc = Math.trunc(avgPowerstats);

    if (avgPowerstats < 5) {
      for (let i = 0; i < trunc; i++) {
        html += `<i class="material-icons orange-text">star</i>`;
      }
      if ( (avgPowerstats - trunc) * 10 >= 5 ) {
        html += `<i class="material-icons orange-text">star_half</i>`;
        for (let i = 1; i < (5 - trunc); i++) {
          html += `<i class="material-icons orange-text">star_border</i>`;
        }
      } else {
        for (let i = 0; i < (5 - trunc); i++) {
          html += `<i class="material-icons orange-text">star_border</i>`;
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        html += `<i class="material-icons orange-text">star</i>`;
      }
    }
    return html;
  }

}
