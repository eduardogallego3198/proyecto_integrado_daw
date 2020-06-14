import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    // styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    form: any = {};

    constructor (private consultaService: ConsultaService) {}

    ngOnInit() {
        
    }

    onSubmit() {
        this.consultaService.create({
            asunto: this.form.asunto, 
            mensaje: this.form.mensaje
        })

        console.log(this.form.asunto);
        console.log(this.form.mensaje);
        
    }
}