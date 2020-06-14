import { Component, OnInit } from '@angular/core';
import { LineaPedidoService } from 'src/app/services/lineaPedido.service';

@Component({
    selector: 'app-nuevaLineaPedido',
    templateUrl: './nuevaLineaPedido.component.html',
    // styleUrls: ['./nuevaLineaPedido.component.css']
})
export class NuevaLineaPedidoComponent implements OnInit {
    lineaPedido = {
        id_pedido: '',
        id_libro: '',
        cantidad: '',
        total_linea: ''
    };

    constructor(private lineaPedidoService: LineaPedidoService) { }

    ngOnInit() {
    }

    saveLineaPedido() {
        const data = {
            id_pedido: this.lineaPedido.id_pedido,
            id_libro: this.lineaPedido.id_libro,
            cantidad: this.lineaPedido.cantidad,
            total_linea: this.lineaPedido.total_linea
        };

        this.lineaPedidoService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newLineaPedido() {
        this.lineaPedido = {
            id_pedido: '',
            id_libro: '',
            cantidad: '',
            total_linea: ''
        };
    }
}