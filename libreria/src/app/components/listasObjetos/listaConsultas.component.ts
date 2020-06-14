import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
    selector: 'app-listaConsultas',
    templateUrl: './listaConsultas.component.html',
    // styleUrls: ['./listaConsultas.component.css']
})
export class ListaConsultasComponent implements OnInit {

    consultas: any;
    currentConsulta = null;
    currentIndex = -1;
    field = '';
    value = ''

    constructor(private consultaService: ConsultaService) { }

    ngOnInit() {
        this.retrieveConsultas();
    }

    retrieveConsultas() {
        this.consultaService.getAll()
            .subscribe(
                data => {
                    this.consultas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    refreshList() {
        this.retrieveConsultas();
        this.currentConsulta = null;
        this.currentIndex = -1;
    }

    setActiveConsulta(consulta: any, index: number) {
        this.currentConsulta = consulta;
        this.currentIndex = index;
    }

    removeAllConsultas() {
        this.consultaService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveConsultas();
                },
                error => {
                    console.log(error);
                });
    }

    searchField() {
        this.consultaService.findByField(this.field, this.value)
            .subscribe(
                data => {
                    this.consultas = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}