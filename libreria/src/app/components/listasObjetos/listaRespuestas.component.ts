import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/services/respuesta.service';

@Component({
    selector: 'app-listaRespuestas',
    templateUrl: './listaRespuestas.component.html',
    // styleUrls: ['./listaPedidos.component.css']
})
export class ListaRespuestasComponent implements OnInit {

    respuestas: any;
    currentRespuesta = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private respuestaService: RespuestaService) { }

    ngOnInit() {
        this.retrieveRespuestas();
    }

    retrieveRespuestas() {
        this.respuestaService.getAll()
            .subscribe(
                data => {
                    this.respuestas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveRespuestas();
        this.currentRespuesta = null;
        this.currentIndex = -1;
    }

    setActiveRespuesta(respuesta: any, index: number) {
        this.currentRespuesta = respuesta;
        this.currentIndex = index;
    }

    removeAllRespuestas() {
        this.respuestaService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveRespuestas();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.respuestaService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.respuestas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}