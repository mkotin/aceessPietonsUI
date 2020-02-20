import {Pipe, PipeTransform, Injectable} from '@angular/core';

@Pipe({
    name: 'userFilter'
})
@Injectable()
export class UserFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if ( !value) {
            return items;
        }

        items.map(singleItem => {
            if (!singleItem['fname']) singleItem['fname'] = '';
            if (!singleItem['lname']) singleItem['lname'] = '';
            if (!singleItem['id']) singleItem['id'] = '';
            if (!singleItem['login']) singleItem['login'] = '';
            if (!singleItem['email']) singleItem['email'] = '';
            if (!singleItem['fonction']) singleItem['fonction'] = '';
            if (!singleItem['role']['role']) singleItem['role']['role'] = '';
            if (!singleItem['responsable']) singleItem['responsable'] = '';
            if (!singleItem['structure']['nom']) singleItem['structure']['nom'] = '';
            return singleItem;
        });

        return items.filter(singleItem =>
            singleItem['fname'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['lname'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['id'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['login'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['fonction'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['role']['role'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['structure']['nom'].toString().toLowerCase().includes(value.toLowerCase())
        );
    }
}