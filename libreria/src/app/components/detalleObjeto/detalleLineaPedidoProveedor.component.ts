import { Component, OnInit } from '@angular/core';
import { LineaPedidoProveedorService } from 'src/app/services/lineaPedidoProveedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detalleLineaPedidoProveedor',
    templateUrl: './detalleLineaPedidoProveedor.component.html',
    // styleUrls: ['./detalleLineaPedidoProveedor.component.css']
})
export class DetalleLineaPedidoProveedorComponent implements OnInit {
    currentLineaPedidoProveedor = null;
    message = '';

    constructor(
        private lineaPedidoProveedorService: LineaPedidoProveedorService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.message = '';
        this.getLineaPedidoProveedor(this.route.snapshot.paramMap.get('id'));
    }

    getLineaPedidoProveedor(id: any) {
        this.lineaPedidoProveedorService.get(id)
            .subscribe(
                data => {
                    this.currentLineaPedidoProveedor = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    updateLineaPedidoProveedor() {
        this.lineaPedidoProveedorService.update(this.currentLineaPedidoProveedor.id, this.currentLineaPedidoProveedor)
            .subscribe(
                response => {
                    console.log(response);
                    this.message = 'La LineaPedidoProveedor se ha modificado correctamente';
                },
                error => {
                    console.log(error);
                });
    }

    deleteLineaPedidoProveedor() {
        this.lineaPedidoProveedorService.delete(this.currentLineaPedidoProveedor.id)
            .subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['/lineasPedidosProveedores']);
                },
                error => {
                    console.log(error);
                });
    }
}