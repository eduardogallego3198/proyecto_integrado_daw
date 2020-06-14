import { Component, OnInit } from '@angular/core';
import { AlbaranService } from 'src/app/services/albaran.service';

@Component({
    selector: 'app-listaAlbaranes',
    templateUrl: './listaAlbaranes.component.html',
    // styleUrls: ['./listaAlbaranes.component.css']
})
export class ListaAlbaranesComponent implements OnInit {

    albaranes: any;
    currentAlbaran = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private albaranService: AlbaranService) { }

    ngOnInit() {
        this.retrieveAlbaranes();
    }

    retrieveAlbaranes() {
        this.albaranService.getAll()
            .subscribe(
                data => {
                    this.albaranes = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveAlbaranes();
        this.currentAlbaran = null;
        this.currentIndex = -1;
    }

    setActiveAlbaran(albaran: any, index: number) {
        this.currentAlbaran = albaran;
        this.currentIndex = index;
    }

    removeAllAlbaranes() {
        this.albaranService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveAlbaranes();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.albaranService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.albaranes = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}