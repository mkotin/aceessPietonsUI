import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demandeFilter'
})
export class DemandeSearchPipe implements PipeTransform {

  transform(items: any[], value: string,  value2: string, value3: string, value4: any): any[] {
    if (!items) {
      return [];
    }
    if (!value && !value2 && !value3) {
      return items;
    }

    items.map(singleItem => {
      if (!singleItem['ref']) singleItem['ref'] = '';
      if (!singleItem['statut']) singleItem['statut'] = '';
      if (!singleItem['structure']['nom']) singleItem['structure']['nom'] = '';
      if (!singleItem['montant']) singleItem['montant'] = '';
      if (!singleItem['responsable']) singleItem['responsable'] = '';
      if (!singleItem['objet_demande']) singleItem['objet_demande'] = '';
      if (!singleItem['montant_accepte']) singleItem['montant_accepte'] = '';
      if (!singleItem['date_soumission']) singleItem['date_soumission'] = '';
      if (!singleItem['date_retrait']) singleItem[ 'date_retrait'] = '';
      if (!singleItem['niveau_acces']) singleItem[ 'niveau_acces'] = 2;
      return singleItem;
    });

    

    if(value) {
      if (value.length < 3) {
      return items;
      }

      // Value(search bar filter)
      items = items.filter(singleItem =>
       (singleItem['ref'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['statut'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['structure']['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['montant'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['responsable'].toLowerCase().includes(value.toLowerCase()) ||
        singleItem['objet_demande'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['montant_accepte'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['date_soumission'].toString().toLowerCase().includes(value.toLowerCase()) ||
        singleItem['date_retrait'].toString().toLowerCase().includes(value.toLowerCase()) )
      );
    }

    return items.filter(function(singleItem){
      let status = true, assign = true, niveau = true; 
       if(value2 && value2 != 'all'){
         status = (singleItem['statut'].toString().toLowerCase() == value2);
       }
       if(value3 && value3 != 'all'){
         assign = (singleItem['agent_id'] == value3);
       }
       if (value4) {
         niveau = (singleItem['niveau_acces'] == value4);
       }
       return (status && assign && niveau);
    });

  }

}
