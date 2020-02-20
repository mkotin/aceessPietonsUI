import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
    name: 'structureFilter'
})
@Injectable()
export class StructureFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }

        items.map(singleItem => {
            if (!singleItem['nom']) singleItem['nom'] = '';
            if (!singleItem['numero_accreditation']) singleItem['numero_accreditation'] = '';
            if (!singleItem['numero_agrement']) singleItem['numero_agrement'] = '';
            if (!singleItem['email']) singleItem['email'] = '';
            if (!singleItem['telephone']) singleItem['telephone'] = '';
            if (!singleItem['siege']) singleItem['siege'] = '';
            if (!singleItem['sigle']) singleItem['sigle'] = '';
            if (!singleItem['ifu']) singleItem['ifu'] = '';
            if (!singleItem['responsable']) singleItem['responsable'] = '';
            if (!singleItem['id']) singleItem['id'] = '';
            return singleItem;
        });

        return items.filter(singleItem =>
            singleItem['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['numero_accreditation'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['numero_agrement'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['telephone'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['siege'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['sigle'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['ifu'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['responsable'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['id'].toString().toLowerCase().includes(value.toLowerCase())
        );
    }
}