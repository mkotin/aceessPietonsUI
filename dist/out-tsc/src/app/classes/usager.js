var Usager = /** @class */ (function () {
    function Usager(id, nom, prenoms, date_naiss, lieu_naiss, nationalite, photo, adresse, telephone, email, fonction, num_piece_identite, num_carte_professionelle, num_certificat_prise_service, type_acces, temps_acces, actif, date_ajout, statut, structure_id, badge_id, badge_type_id, zone_id, created_at, updated_at) {
        if (id === void 0) { id = null; }
        this.id = id;
        this.nom = nom;
        this.prenoms = prenoms;
        this.date_naiss = date_naiss;
        this.lieu_naiss = lieu_naiss;
        this.nationalite = nationalite;
        this.photo = photo;
        this.adresse = adresse;
        this.telephone = telephone;
        this.email = email;
        this.fonction = fonction;
        this.num_piece_identite = num_piece_identite;
        this.num_carte_professionelle = num_carte_professionelle;
        this.num_certificat_prise_service = num_certificat_prise_service;
        this.type_acces = type_acces;
        this.temps_acces = temps_acces;
        this.actif = actif;
        this.date_ajout = date_ajout;
        this.statut = statut;
        this.structure_id = structure_id;
        this.badge_id = badge_id;
        this.badge_type_id = badge_type_id;
        this.zone_id = zone_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Usager;
}());
export { Usager };
//# sourceMappingURL=usager.js.map