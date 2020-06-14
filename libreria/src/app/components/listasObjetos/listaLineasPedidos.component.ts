import { Component, OnInit } from '@angular/core';
import { LineaPedidoService } from 'src/app/services/lineaPedido.service';

@Component({
    selector: 'app-listaLineasPedidos',
    templateUrl: './listaLineasPedidos.component.html',
    // styleUrls: ['./listaLineasPedidos.component.css']
})
export class ListaLineasPedidosComponent implements OnInit {

    lineasPedidos: any;
    currentlineaPedido = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private lineaPedidoService: LineaPedidoService) { }

    ngOnInit() {
        this.retrieveLineasPedidos();
    }

    retrieveLineasPedidos() {
        this.lineaPedidoService.getAll()
            .subscribe(
                data => {
                    this.lineasPedidos = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveLineasPedidos();
        this.currentlineaPedido = null;
        this.currentIndex = -1;
    }

    setActiveLineaPedido(lineaPedido: any, index: number) {
        this.currentlineaPedido = lineaPedido;
        this.currentIndex = index;
    }

    removeAllLineasPedidos() {
        this.lineaPedidoService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveLineasPedidos();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.lineaPedidoService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.lineasPedidos = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}