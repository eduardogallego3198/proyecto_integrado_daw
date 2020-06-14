import { Component, OnInit } from '@angular/core';
import { LineaPedidoProveedorService } from 'src/app/services/lineaPedidoProveedor.service';

@Component({
    selector: 'app-nuevaLineaPedidoProveedor',
    templateUrl: './nuevaLineaPedidoProveedor.component.html',
    // styleUrls: ['./nuevaLineaPedidoProveedor.component.css']
})
export class NuevaLineaPedidoProveedorComponent implements OnInit {
    lineaPedidoProveedor = {
        id_pedido_proveedor: '',
        id_libro: '',
        cantidad: '',
        total_linea: ''
    };

    constructor(private lineaPedidoProveedorService: LineaPedidoProveedorService) { }

    ngOnInit() {
    }

    saveLineaPedidoProveedor() {
        const data = {
            id_pedido_proveedor: this.lineaPedidoProveedor.id_pedido_proveedor,
            id_libro: this.lineaPedidoProveedor.id_libro,
            cantidad: this.lineaPedidoProveedor.cantidad,
            total_linea: this.lineaPedidoProveedor.total_linea
        };

        this.lineaPedidoProveedorService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newLineaPedidoProveedor() {
        this.lineaPedidoProveedor = {
            id_pedido_proveedor: '',
            id_libro: '',
            cantidad: '',
            total_linea: ''
        };
    }
}