import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
    selector: 'app-areaCliente',
    templateUrl: './areaCliente.component.html',
    // styleUrls: ['./areaCliente.component.css']
})
export class AreaClienteComponent implements OnInit {
    datoComunicar: string;
    content = '';
    perfilVisible = false;

    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
        this.clienteService.getUserBoard().subscribe(
            data => {
                this.content = data;
            },
            err => {
                this.content = JSON.parse(err.error).message;
            }
        );
        
    }

    mostrarPerfil() {
        
    }
}
