import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevoCliente',
  templateUrl: './nuevoCliente.component.html',
  // styleUrls: ['./nuevoCliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  cliente = {
    nombre: '',
    apellidos: '',
    direccion: '',
    dni: '',
    telefono: '',
    email: ''
  };

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  saveCliente() {
    const data = {
      nombre: this.cliente.nombre,
      apellidos: this.cliente.apellidos,
      direccion: this.cliente.direccion,
      dni: this.cliente.dni,
      telefono: this.cliente.telefono,
      email: this.cliente.email
    };

    this.clienteService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newCliente() {
    this.cliente = {
      nombre: '',
      apellidos: '',
      direccion: '',
      dni: '',
      telefono: '',
      email: ''
    };
  }
}