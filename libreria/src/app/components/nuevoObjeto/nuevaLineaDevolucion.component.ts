import { Component, OnInit } from '@angular/core';
import { LineaDevolucionService } from 'src/app/services/lineaDevolucion.service';

@Component({
    selector: 'app-nuevaLineaDevolucion',
    templateUrl: './nuevaLineaDevolucion.component.html',
    // styleUrls: ['./nuevaLineaDevolucion.component.css']
})
export class NuevaLineaDevolucionComponent implements OnInit {
    lineaDevolucion = {
        id_devolucion: '',
        id_libro: '',
        cantidad: '',
        total_linea: ''
    };

    constructor(private lineaDevolucionService: LineaDevolucionService) { }

    ngOnInit() {
    }

    saveLineaDevolucion() {
        const data = {
            id_devolucion: this.lineaDevolucion.id_devolucion,
            id_libro: this.lineaDevolucion.id_libro,
            cantidad: this.lineaDevolucion.cantidad,
            total_linea: this.lineaDevolucion.total_linea
        };

        this.lineaDevolucionService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newLineaDevolucion() {
        this.lineaDevolucion = {
            id_devolucion: '',
            id_libro: '',
            cantidad: '',
            total_linea: ''
        };
    }
}