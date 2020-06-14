import { Component, OnInit } from '@angular/core';
import { AlbaranService } from 'src/app/services/albaran.service';

@Component({
    selector: 'app-nuevoAlbaran',
    templateUrl: './nuevoAlbaran.component.html',
    // styleUrls: ['./nuevoAlbaran.component.css']
})
export class NuevoAlbaranComponent implements OnInit {
    albaran = {
        id_pedido_proveedor: '',
        fecha: '',
        metodo_pago: ''
    };

    constructor(private albaranService: AlbaranService) { }

    ngOnInit() {
    }

    saveAlbaran() {
        const data = {
            id_pedido_proveedor: this.albaran.id_pedido_proveedor,
            fecha: this.albaran.fecha,
            metodo_pago: this.albaran.metodo_pago
        };

        this.albaranService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    newAlbaran() {
        this.albaran = {
            id_pedido_proveedor: '',
            fecha: '',
            metodo_pago: ''
        };
    }
}