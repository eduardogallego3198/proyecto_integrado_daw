import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { EncargadoService } from '../services/encargado.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    // styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    content: string;

    constructor() { }

    ngOnInit() {

    }
}