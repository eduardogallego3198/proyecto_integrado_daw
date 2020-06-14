import { Component, OnInit } from '@angular/core';
import { PedidoProveedorService } from 'src/app/services/pedidoProveedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallePedidoProveedor',
  templateUrl: './detallePedidoProveedor.component.html',
  // styleUrls: ['./detallePedidoProveedor.component.css']
})
export class DetallePedidoProveedorComponent implements OnInit {
  currentPedidoProveedor = null;
  message = '';

  constructor(
    private pedidoProveedorService: PedidoProveedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getPedidoProveedor(this.route.snapshot.paramMap.get('id'));
  }

  getPedidoProveedor(id: any) {
    this.pedidoProveedorService.get(id)
      .subscribe(
        data => {
          this.currentPedidoProveedor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePedidoProveedor() {
    this.pedidoProveedorService.update(this.currentPedidoProveedor.id, this.currentPedidoProveedor)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El PedidoProveedor se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deletePedidoProveedor() {
    this.pedidoProveedorService.delete(this.currentPedidoProveedor.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/pedidoProveedors']);
        },
        error => {
          console.log(error);
        });
  }
}