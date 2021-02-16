import { __decorate } from "tslib";
import { Pipe, Injectable } from '@angular/core';
var StructureFilterPipe = /** @class */ (function () {
    function StructureFilterPipe() {
    }
    StructureFilterPipe.prototype.transform = function (items, value) {
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
            if (!singleItem['nom'])
                singleItem['nom'] = '';
            if (!singleItem['numero_accreditation'])
                singleItem['numero_accreditation'] = '';
            if (!singleItem['numero_agrement'])
                singleItem['numero_agrement'] = '';
            if (!singleItem['email'])
                singleItem['email'] = '';
            if (!singleItem['telephone'])
                singleItem['telephone'] = '';
            if (!singleItem['siege'])
                singleItem['siege'] = '';
            if (!singleItem['sigle'])
                singleItem['sigle'] = '';
            if (!singleItem['ifu'])
                singleItem['ifu'] = '';
            if (!singleItem['responsable'])
                singleItem['responsable'] = '';
            if (!singleItem['id'])
                singleItem['id'] = '';
            return singleItem;
        });
        return items.filter(function (singleItem) {
            return singleItem['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['numero_accreditation'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['numero_agrement'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['email'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['telephone'].toLowerCase().includes(value.toLowerCase()) ||
                singleItem['siege'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['sigle'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['ifu'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['responsable'].toString().toLowerCase().includes(value.toLowerCase()) ||
                singleItem['id'].toString().toLowerCase().includes(value.toLowerCase());
        });
    };
    StructureFilterPipe = __decorate([
        Pipe({
            name: 'structureFilter'
        }),
        Injectable()
    ], StructureFilterPipe);
    return StructureFilterPipe;
}());
export { StructureFilterPipe };
//# sourceMappingURL=structure-filter.pipe.js.map