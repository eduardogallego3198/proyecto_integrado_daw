import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallePedido',
  templateUrl: './detallePedido.component.html',
  // styleUrls: ['./detallePedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  currentPedido = null;
  message = '';

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getPedido(this.route.snapshot.paramMap.get('id'));
  }

  getPedido(id: any) {
    this.pedidoService.get(id)
      .subscribe(
        data => {
          this.currentPedido = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePedido() {
    this.pedidoService.update(this.currentPedido.id, this.currentPedido)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El Pedido se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deletePedido() {
    this.pedidoService.delete(this.currentPedido.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/pedidos']);
        },
        error => {
          console.log(error);
        });
  }
}