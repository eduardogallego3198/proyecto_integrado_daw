import { Component, OnInit } from '@angular/core';
import { LineaDevolucionService } from 'src/app/services/lineaDevolucion.service';

@Component({
    selector: 'app-listaLineasDevoluciones',
    templateUrl: './listaLineasDevoluciones.component.html',
    // styleUrls: ['./listaLineasDevoluciones.component.css']
})
export class ListaLineasDevolucionesComponent implements OnInit {

    lineasDevoluciones: any;
    currentlineaDevolucion = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private lineasDevolucionService: LineaDevolucionService) { }

    ngOnInit() {
        this.retrieveLineasDevoluciones();
    }

    retrieveLineasDevoluciones() {
        this.lineasDevolucionService.getAll()
            .subscribe(
                data => {
                    this.lineasDevoluciones = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveLineasDevoluciones();
        this.currentlineaDevolucion = null;
        this.currentIndex = -1;
    }

    setActiveLineaDevolucion(lineaDevolucion: any, index: number) {
        this.currentlineaDevolucion = lineaDevolucion;
        this.currentIndex = index;
    }

    removeAllLineasDevoluciones() {
        this.lineasDevolucionService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveLineasDevoluciones();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.lineasDevolucionService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.lineasDevoluciones = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}