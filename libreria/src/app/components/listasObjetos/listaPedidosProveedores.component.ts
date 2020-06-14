import { Component, OnInit } from '@angular/core';
import { PedidoProveedorService } from 'src/app/services/pedidoProveedor.service';

@Component({
    selector: 'app-listaPedidosProveedores',
    templateUrl: './listaPedidosProveedores.component.html',
    // styleUrls: ['./listaPedidosProveedores.component.css']
})
export class ListaPedidosProveedoresComponent implements OnInit {

    pedidosProveedores: any;
    currentPedidoProveedor = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private pedidoProveedorService: PedidoProveedorService) { }

    ngOnInit() {
        this.retrievePedidosProveedores();
    }

    retrievePedidosProveedores() {
        this.pedidoProveedorService.getAll()
            .subscribe(
                data => {
                    this.pedidosProveedores = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrievePedidosProveedores();
        this.currentPedidoProveedor = null;
        this.currentIndex = -1;
    }

    setActivePedidoProveedor(pedidoProveedor: any, index: number) {
        this.currentPedidoProveedor = pedidoProveedor;
        this.currentIndex = index;
    }

    removeAllPedidosProveedores() {
        this.pedidoProveedorService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrievePedidosProveedores();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.pedidoProveedorService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.pedidosProveedores = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}