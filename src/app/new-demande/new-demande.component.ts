import {Component, OnInit} from '@angular/core';
import {Usager} from "../classes/usager";

declare let $;

@Component({
    selector: 'app-new-demande',
    templateUrl: './new-demande.component.html',
    styleUrls: ['./new-demande.component.scss']
})
export class NewDemandeComponent implements OnInit {
    objet: string;
    retrait: string;
    responsable: string;
    usagers = [];
    addingUsager: Usager = new Usager();
    viewingUsager: Usager = null;
    editingUsager: Usager = null;
    editingIndex: any;

    constructor() {
    }

    ngOnInit() {
    }

    addUsager() {
        this.usagers.push(this.addingUsager);
        $("#addUsagerModal").modal('hide');
    }

    removeUsager(index) {
        this.usagers.splice(index, 1);
    }

    usagerPhotoSelected(event) {
        const reader = new FileReader();
        reader.onload = () => {
            if (this.editingUsager) {
                this.editingUsager.photo = reader.result;
            } else {
                this.addingUsager.photo = reader.result;
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    updateUsager() {
        this.usagers[this.editingIndex] = this.editingUsager;
        this.editingUsager = null;
        $("#editUsagerModal").modal('hide');

    }

}
