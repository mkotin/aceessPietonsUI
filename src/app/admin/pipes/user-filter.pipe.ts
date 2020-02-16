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

        return items.filter(singleItem =>
            singleItem['fname'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['lname'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['id'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['login'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['email'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['fonction'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['role']['role'].toLowerCase().includes(value.toLowerCase()) ||
            singleItem['structure']['nom'].toLowerCase().includes(value.toLowerCase())
        );
    }
}