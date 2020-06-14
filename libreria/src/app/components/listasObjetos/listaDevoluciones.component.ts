import { Component, OnInit } from '@angular/core';
import { DevolucionService } from 'src/app/services/devolucion.service';

@Component({
    selector: 'app-listaDevoluciones',
    templateUrl: './listaDevoluciones.component.html',
    // styleUrls: ['./listaDevoluciones.component.css']
})
export class ListaDevolucionesComponent implements OnInit {

    devoluciones: any;
    currentDevolucion = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private devolucionService: DevolucionService) { }

    ngOnInit() {
        this.retrieveDevoluciones();
    }

    retrieveDevoluciones() {
        this.devolucionService.getAll()
            .subscribe(
                data => {
                    this.devoluciones = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveDevoluciones();
        this.currentDevolucion = null;
        this.currentIndex = -1;
    }

    setActiveDevolucion(devolucion: any, index: number) {
        this.currentDevolucion = devolucion;
        this.currentIndex = index;
    }

    removeAllDevoluciones() {
        this.devolucionService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveDevoluciones();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.devolucionService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.devoluciones = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}