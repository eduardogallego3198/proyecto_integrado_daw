import { Component, OnInit } from '@angular/core';
import { LineaPedidoProveedorService } from 'src/app/services/lineaPedidoProveedor.service';

@Component({
    selector: 'app-listaLineasPedidosProveedores',
    templateUrl: './listaLineasPedidosProveedores.component.html',
    // styleUrls: ['./listaLineasPedidosProveedores.component.css']
})
export class ListaLineasPedidosProveedoresComponent implements OnInit {

    lineasPedidosProveedores: any;
    currentlineaPedidoProveedor = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private lineasPedidoSProveedoreservice: LineaPedidoProveedorService) { }

    ngOnInit() {
        this.retrieveLineasPedidosProveedores();
    }

    retrieveLineasPedidosProveedores() {
        this.lineasPedidoSProveedoreservice.getAll()
            .subscribe(
                data => {
                    this.lineasPedidosProveedores = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveLineasPedidosProveedores();
        this.currentlineaPedidoProveedor = null;
        this.currentIndex = -1;
    }

    setActiveLineaPedidoProveedor(lineaPedidoProveedor: any, index: number) {
        this.currentlineaPedidoProveedor = lineaPedidoProveedor;
        this.currentIndex = index;
    }

    removeAllLineasPedidosProveedores() {
        this.lineasPedidoSProveedoreservice.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveLineasPedidosProveedores();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.lineasPedidoSProveedoreservice.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.lineasPedidosProveedores = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}