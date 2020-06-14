import { Component, OnInit } from '@angular/core';
import { PedidoProveedorService } from 'src/app/services/pedidoProveedor.service';

@Component({
    selector: 'app-nuevoPedidoProveedor',
    templateUrl: './nuevoPedidoProveedor.component.html',
    // styleUrls: ['./nuevoPedidoProveedor.component.css']
})
export class NuevoPedidoProveedorComponent implements OnInit {
    pedidoProveedor = {
        fecha: '',
        id_encargado: '',
        pagado: '',
        total: ''
    };

    constructor(private pedidoProveedorService: PedidoProveedorService) { }

    ngOnInit() {
    }

    savepedidoProveedor() {
        const data = {
            fecha: this.pedidoProveedor.fecha,
            id_encargado: this.pedidoProveedor.id_encargado,
            pagado: this.pedidoProveedor.pagado,
            total: this.pedidoProveedor.total
        };

        this.pedidoProveedorService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newpedidoProveedor() {
        this.pedidoProveedor = {
            fecha: '',
            id_encargado: '',
            pagado: '',
            total: ''
        };
    }
}