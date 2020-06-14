import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-nuevaConsulta',
  templateUrl: './nuevaConsulta.component.html',
  // styleUrls: ['./nuevaConsulta.component.css']
})
export class NuevaConsultaComponent implements OnInit {
  consulta = {
    id_cliente: '',
    asunto: '',
    mensaje: ''
  };

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
  }

  saveConsulta() {
    const data = {
      id_cliente: this.consulta.id_cliente,
      asunto: this.consulta.asunto,
      mensaje: this.consulta.mensaje
    };

    this.consultaService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newConsulta() {
    this.consulta = {
        id_cliente: '',
        asunto: '',
        mensaje: ''
      };
  }
}