import { Component, OnInit } from '@angular/core';
import { DevolucionService } from 'src/app/services/devolucion.service';

@Component({
  selector: 'app-nuevaDevolucion',
  templateUrl: './nuevaDevolucion.component.html',
  // styleUrls: ['./nuevaDevolucion.component.css']
})
export class NuevaDevolucionComponent implements OnInit {
  devolucion = {
    id_cliente: '',
    asunto: '',
    mensaje: ''
  };

  constructor(private devolucionService: DevolucionService) { }

  ngOnInit() {
  }

  saveDevolucion() {
    const data = {
      id_cliente: this.devolucion.id_cliente,
      asunto: this.devolucion.asunto,
      mensaje: this.devolucion.mensaje
    };

    this.devolucionService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newDevolucion() {
    this.devolucion = {
        id_cliente: '',
        asunto: '',
        mensaje: ''
      };
  }
}