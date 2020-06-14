import { Component, OnInit } from '@angular/core';
import { EncargadoService } from 'src/app/services/encargado.service';

@Component({
    selector: 'app-listaEncargados',
    templateUrl: './listaEncargados.component.html',
    // styleUrls: ['./listaEncargados.component.css']
})
export class ListaEncargadosComponent implements OnInit {

    encargados: any;
    currentEncargado = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private encargadoService: EncargadoService) { }

    ngOnInit() {
        this.retrieveEncargados();
    }

    retrieveEncargados() {
        this.encargadoService.getAll()
            .subscribe(
                data => {
                    this.encargados = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveEncargados();
        this.currentEncargado = null;
        this.currentIndex = -1;
    }

    setActiveEncargado(encargado: any, index: number) {
        this.currentEncargado = encargado;
        this.currentIndex = index;
    }

    removeAllEncargados() {
        this.encargadoService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveEncargados();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.encargadoService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.encargados = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}