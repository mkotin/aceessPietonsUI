import { __decorate } from "tslib";
import { Pipe, Injectable } from '@angular/core';
var UserFilterPipe = /** @class */ (function () {
    function UserFilterPipe() {
    }
    UserFilterPipe.prototype.transform = function (items, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        if (value.length < 3) {
            return items;
        }
        items.map(function (singleItem) {
            if (!singleItem['fname'])
                singleItem['fname'] = '';
            if (!singleItem['lname'])
                singleItem['lname'] = '';
            if (!singleItem['id'])
                singleItem['id'] = '';
            if (!singleItem['login'])
                singleItem['login'] = '';
            if (!singleItem['email'])
                singleItem['email'] = '';
            if (!singleItem['fonction'])
                singleItem['fonction'] = '';
            if (!singleItem['role']['role'])
                singleItem['role']['role'] = '';
            if (!singleItem['responsable'])
                singleItem['responsable'] = '';
            if (!singleItem['structure']['nom'])
                singleItem['structure']['nom'] = '';
            return singleItem;
        });
        return items.filter(function (singleItem) {
            return singleItem['fname'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['lname'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['id'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['login'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['fonction'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['role']['role'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['structure']['nom'].toString().toLowerCase().includes(value.toLowerCase());
        });
    };
    UserFilterPipe = __decorate([
        Pipe({
            name: 'userFilter'
        }),
        Injectable()
    ], UserFilterPipe);
    return UserFilterPipe;
}());
export { UserFilterPipe };
//# sourceMappingURL=user-filter.pipe.js.map