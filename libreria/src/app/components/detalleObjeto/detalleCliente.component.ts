import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleCliente',
  templateUrl: './detalleCliente.component.html',
  // styleUrls: ['./detalleCliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  @Input() componenteComunicar: string;
  currentCliente = null;
  message = '';
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCliente(JSON.parse(sessionStorage.getItem('auth-cliente')).id);
  }

  getCliente(id: any) {
    this.clienteService.get(id)
      .subscribe(
        data => {
          this.currentCliente = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCliente() {
    this.clienteService.update(this.currentCliente.id, this.currentCliente)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El Cliente se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteCliente() {
    this.clienteService.delete(this.currentCliente.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/clientes']);
        },
        error => {
          console.log(error);
        });
  }
}