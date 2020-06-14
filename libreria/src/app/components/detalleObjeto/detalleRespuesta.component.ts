import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detalleRespuesta',
    templateUrl: './detalleRespuesta.component.html',
    // styleUrls: ['./detalleRespuesta.component.css']
})
export class DetalleRespuestaComponent implements OnInit {
    currentRespuesta = null;
    message = '';

    constructor(
        private respuestaService: RespuestaService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.message = '';
        this.getRespuesta(this.route.snapshot.paramMap.get('id'));
    }

    getRespuesta(id: any) {
        this.respuestaService.get(id)
            .subscribe(
                data => {
                    this.currentRespuesta = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    updateRespuesta() {
        this.respuestaService.update(this.currentRespuesta.id, this.currentRespuesta)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'La Respuesta se ha modificado correctamente';
                },
                error => {
                    console.log(error);
                });
    }

    deleteRespuesta() {
        this.respuestaService.delete(this.currentRespuesta.id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/respuestas']);
                },
                error => {
                    console.log(error);
                });
    }
}