import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
    selector: 'app-nuevoPedido',
    templateUrl: './nuevoPedido.component.html',
    // styleUrls: ['./nuevoPedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {
    pedido = {
        fecha: '',
        id_encargado: '',
        id_cliente: '',
        pagado: '',
        total: '',
        estado: ''
    };

    constructor(private pedidoService: PedidoService) { }

    ngOnInit() {
    }

    savepedido() {
        const data = {
            fecha: this.pedido.fecha,
            id_encargado: this.pedido.id_encargado,
            id_cliente: this.pedido.id_cliente,
            pagado: this.pedido.pagado,
            total: this.pedido.total,
            estado: this.pedido.estado
        };

        this.pedidoService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newpedido() {
        this.pedido = {
            fecha: '',
            id_encargado: '',
            id_cliente: '',
            pagado: '',
            total: '',
            estado: ''
        };
    }
}