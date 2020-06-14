import { Component, OnInit } from '@angular/core';
import { EncargadoService } from 'src/app/services/encargado.service';

@Component({
  selector: 'app-nuevoEncargado',
  templateUrl: './nuevoEncargado.component.html',
  // styleUrls: ['./nuevoEncargado.component.css']
})
export class NuevoEncargadoComponent implements OnInit {
  encargado = {
    nombre: '',
    apellidos: ''
  };

  constructor(private encargadoService: EncargadoService) { }

  ngOnInit() {
  }

  saveencargado() {
    const data = {
      nombre: this.encargado.nombre,
      apellidos: this.encargado.apellidos
    };

    this.encargadoService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newencargado() {
    this.encargado = {
      nombre: '',
      apellidos: ''
    };
  }
}