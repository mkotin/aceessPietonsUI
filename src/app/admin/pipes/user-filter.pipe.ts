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
        if (!value) {
            return items;
        }

        function checker(item) {
            const keys = Object.keys(item);
            let found: any = false;
            console.log(item);
            console.log(keys);
            for (const key of keys) {
                if(item[key])
                    found = item[key].toString().toLowerCase().includes(value.toLowerCase());
                if (found)
                    return found;
            }
        }

        return items.filter(checker);
    }
}