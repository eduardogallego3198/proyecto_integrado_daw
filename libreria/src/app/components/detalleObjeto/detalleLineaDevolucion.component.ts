import { Component, OnInit } from '@angular/core';
import { LineaDevolucionService } from 'src/app/services/lineaDevolucion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detalleLineaDevolucion',
    templateUrl: './detalleLineaDevolucion.component.html',
    // styleUrls: ['./detalleLineaDevolucion.component.css']
})
export class DetalleLineaDevolucionComponent implements OnInit {
    currentLineaDevolucion = null;
    message = '';

    constructor(
        private lineaDevolucionService: LineaDevolucionService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.message = '';
        this.getLineaDevolucion(this.route.snapshot.paramMap.get('id'));
    }

    getLineaDevolucion(id: any) {
        this.lineaDevolucionService.get(id)
            .subscribe(
                data => {
                    this.currentLineaDevolucion = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    updateLineaDevolucion() {
        this.lineaDevolucionService.update(this.currentLineaDevolucion.id, this.currentLineaDevolucion)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'La LineaDevolucion se ha modificado correctamente';
                },
                error => {
                    console.log(error);
                });
    }

    deleteLineaDevolucion() {
        this.lineaDevolucionService.delete(this.currentLineaDevolucion.id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/lineasDevoluciones']);
                },
                error => {
                    console.log(error);
                });
    }
}