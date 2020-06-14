import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
    selector: 'app-listaPedidos',
    templateUrl: './listaPedidos.component.html',
    // styleUrls: ['./listaPedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

    pedidos: any;
    pedidosClienteLogueado = [];
    currentPedido = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private pedidoService: PedidoService) { }
    
    ngOnInit() {
        this.retrievePedidos();
        
    }
    
    retrievePedidos() {
        this.pedidoService.getAll()
        .subscribe(
            data => {
                this.pedidos = data;
                console.log(data);
                for (let pedido in data) {
                    if (data[pedido].id_cliente == JSON.parse(sessionStorage.getItem('auth-cliente')).id) {
                        this.pedidosClienteLogueado[pedido](data[pedido]);
                    }
                }
            },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrievePedidos();
        this.currentPedido = null;
        this.currentIndex = -1;
    }

    setActivePedido(pedido: any, index: number) {
        this.currentPedido = pedido;
        this.currentIndex = index;
    }

    removeAllPedidos() {
        this.pedidoService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrievePedidos();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.pedidoService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.pedidos = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}