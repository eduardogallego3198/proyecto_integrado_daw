import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-listaClientes',
    templateUrl: './listaClientes.component.html',
    // styleUrls: ['./listaClientes.component.css']
})
export class ListaClientesComponent implements OnInit {

    clientes: any;
    currentCliente = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
        this.retrieveClientes();
    }

    retrieveClientes() {
        this.clienteService.getAll()
            .subscribe(
                data => {
                    this.clientes = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveClientes();
        this.currentCliente = null;
        this.currentIndex = -1;
    }

    setActiveCliente(cliente: any, index: number) {
        this.currentCliente = cliente;
        this.currentIndex = index;
    }

    removeAllClientes() {
        this.clienteService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveClientes();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.clienteService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.clientes = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}