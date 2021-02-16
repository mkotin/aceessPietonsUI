import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usagerSearch'
})
export class UsagerSearchPipe implements PipeTransform {

  transform(items: any[], value: string, except: any[]): any[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return [];
    }

    if (value.length < 3) {
      return [];
    }
    items.map(singleItem => {
      if (!singleItem['nom']) singleItem['nom'] = '';
      if (!singleItem['prenoms']) singleItem['prenoms'] = '';
      if (!singleItem['email']) singleItem['email'] = '';
      if (!singleItem['num_piece_identite']) singleItem['num_piece_identite'] = '';
      if (!singleItem['telephone']) singleItem['telephone'] = '';
      return singleItem;
    });

    return items.filter(singleItem =>
     (singleItem['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
      singleItem['prenoms'].toString().toLowerCase().includes(value.toLowerCase()) ||
      singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
      singleItem['num_piece_identite'].toLowerCase().includes(value.toLowerCase()) ||
      singleItem['telephone'].toString().toLowerCase().includes(value.toLowerCase()) ) &&
     !except.includes(singleItem['id'])
    );
  }

}
