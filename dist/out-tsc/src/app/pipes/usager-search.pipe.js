import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var UsagerSearchPipe = /** @class */ (function () {
    function UsagerSearchPipe() {
    }
    UsagerSearchPipe.prototype.transform = function (items, value, except) {
        if (!items) {
            return [];
        }
        if (!value) {
            return [];
        }
        if (value.length < 3) {
            return [];
        }
        items.map(function (singleItem) {
            if (!singleItem['nom'])
                singleItem['nom'] = '';
            if (!singleItem['prenoms'])
                singleItem['prenoms'] = '';
            if (!singleItem['email'])
                singleItem['email'] = '';
            if (!singleItem['num_piece_identite'])
                singleItem['num_piece_identite'] = '';
            if (!singleItem['telephone'])
                singleItem['telephone'] = '';
            return singleItem;
        });
        return items.filter(function (singleItem) {
            return (singleItem['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['prenoms'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['num_piece_identite'].toLowerCase().includes(value.toLowerCase()) ||
                singleItem['telephone'].toString().toLowerCase().includes(value.toLowerCase())) &&
                !except.includes(singleItem['id']);
        });
    };
    UsagerSearchPipe = __decorate([
        Pipe({
            name: 'usagerSearch'
        })
    ], UsagerSearchPipe);
    return UsagerSearchPipe;
}());
export { UsagerSearchPipe };
//# sourceMappingURL=usager-search.pipe.js.map