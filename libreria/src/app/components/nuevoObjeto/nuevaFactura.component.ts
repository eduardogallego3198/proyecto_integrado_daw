import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
    selector: 'app-nuevaFactura',
    templateUrl: './nuevaFactura.component.html',
    // styleUrls: ['./nuevaFactura.component.css']
})
export class NuevaFacturaComponent implements OnInit {
    factura = {
        id_pedido: '',
        fecha: '',
        metodo_pago: ''
    };

    constructor(private facturaService: FacturaService) { }

    ngOnInit() {
    }

    saveFactura() {
        const data = {
            id_pedido: this.factura.id_pedido,
            fecha: this.factura.fecha,
            metodo_pago: this.factura.metodo_pago
        };

        this.facturaService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newFactura() {
        this.factura = {
            id_pedido: '',
            fecha: '',
            metodo_pago: ''
        };
    }
}