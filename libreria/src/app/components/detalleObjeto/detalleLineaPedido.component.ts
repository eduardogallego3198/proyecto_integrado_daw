import { Component, OnInit } from '@angular/core';
import { LineaPedidoService } from 'src/app/services/lineaPedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detalleLineaPedido',
    templateUrl: './detalleLineaPedido.component.html',
    // styleUrls: ['./detalleLineaPedido.component.css']
})
export class DetalleLineaPedidoComponent implements OnInit {
    currentLineaPedido = null;
    message = '';

    constructor(
        private lineaPedidoService: LineaPedidoService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.message = '';
        this.getLineaPedido(this.route.snapshot.paramMap.get('id'));
    }

    getLineaPedido(id: any) {
        this.lineaPedidoService.get(id)
            .subscribe(
                data => {
                    this.currentLineaPedido = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    updateLineaPedido() {
        this.lineaPedidoService.update(this.currentLineaPedido.id, this.currentLineaPedido)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'La LineaPedido se ha modificado correctamente';
                },
                error => {
                    console.log(error);
                });
    }

    deleteLineaPedido() {
        this.lineaPedidoService.delete(this.currentLineaPedido.id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/lineasPedidos']);
                },
                error => {
                    console.log(error);
                });
    }
}