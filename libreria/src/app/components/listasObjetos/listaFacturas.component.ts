import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
    selector: 'app-listaFacturas',
    templateUrl: './listaFacturas.component.html',
    // styleUrls: ['./listaFacturas.component.css']
})
export class ListaFacturasComponent implements OnInit {

    facturas: any;
    currentFactura = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private facturaService: FacturaService) { }

    ngOnInit() {
        this.retrievefacturas();
    }

    retrievefacturas() {
        this.facturaService.getAll()
            .subscribe(
                data => {
                    this.facturas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrievefacturas();
        this.currentFactura = null;
        this.currentIndex = -1;
    }

    setActiveFactura(factura: any, index: number) {
        this.currentFactura = factura;
        this.currentIndex = index;
    }

    removeAllFacturas() {
        this.facturaService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrievefacturas();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.facturaService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.facturas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}