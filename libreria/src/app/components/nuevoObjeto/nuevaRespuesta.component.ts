import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/services/respuesta.service';

@Component({
    selector: 'app-nuevaRespuesta',
    templateUrl: './nuevaRespuesta.component.html',
    // styleUrls: ['./nuevaRespuesta.component.css']
})
export class NuevaRespuestaComponent implements OnInit {
    respuesta = {
        id_consulta: '',
        mensaje: ''
    };

    constructor(private respuestaService: RespuestaService) { }

    ngOnInit() {
    }

    saverespuesta() {
        const data = {
            id_pedido_proveedor: this.respuesta.id_consulta,
            mensaje: this.respuesta.mensaje
        };

        this.respuestaService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newrespuesta() {
        this.respuesta = {
            id_consulta: '',
            mensaje: ''
        };
    }
}