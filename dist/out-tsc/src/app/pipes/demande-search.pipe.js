import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var DemandeSearchPipe = /** @class */ (function () {
    function DemandeSearchPipe() {
    }
    DemandeSearchPipe.prototype.transform = function (items, value, value2, value3) {
        if (!items) {
            return [];
        }
        if (!value && !value2 && !value3) {
            return items;
        }
        items.map(function (singleItem) {
            if (!singleItem['ref'])
                singleItem['ref'] = '';
            if (!singleItem['statut'])
                singleItem['statut'] = '';
            if (!singleItem['structure']['nom'])
                singleItem['structure']['nom'] = '';
            if (!singleItem['montant'])
                singleItem['montant'] = '';
            if (!singleItem['responsable'])
                singleItem['responsable'] = '';
            if (!singleItem['objet_demande'])
                singleItem['objet_demande'] = '';
            if (!singleItem['montant_accepte'])
                singleItem['montant_accepte'] = '';
            if (!singleItem['date_soumission'])
                singleItem['date_soumission'] = '';
            if (!singleItem['date_retrait'])
                singleItem['date_retrait'] = '';
            return singleItem;
        });
        if (value) {
            if (value.length < 3) {
                return items;
            }
            // Value(search bar filter)
            items = items.filter(function (singleItem) {
                return (singleItem['ref'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['statut'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['structure']['nom'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['montant'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['responsable'].toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['objet_demande'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['montant_accepte'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['date_soumission'].toString().toLowerCase().includes(value.toLowerCase()) ||
                    singleItem['date_retrait'].toString().toLowerCase().includes(value.toLowerCase()));
            });
        }
        return items.filter(function (singleItem) {
            var status = true, assign = true;
            if (value2 && value2 != 'all') {
                status = (singleItem['statut'].toString().toLowerCase() == value2);
            }
            if (value3 && value3 != 'all') {
                assign = (singleItem['agent_id'] == value3);
            }
            return (status && assign);
        });
    };
    DemandeSearchPipe = __decorate([
        Pipe({
            name: 'demandeFilter'
        })
    ], DemandeSearchPipe);
    return DemandeSearchPipe;
}());
export { DemandeSearchPipe };
//# sourceMappingURL=demande-search.pipe.js.map