import { Component, OnInit } from '@angular/core';
import { EncargadoService } from '../services/encargado.service';

@Component({
    selector: 'app-areaAdmin',
    templateUrl: './areaAdmin.component.html',
    // styleUrls: ['./areaAdmin.component.css']
})
export class AreaAdminComponent implements OnInit {
    content = '';

    constructor(private adminService: EncargadoService) { }

    ngOnInit() {
        this.adminService.getAdminBoard().subscribe(
            data => {
                this.content = data;
            },
            err => {
                this.content = JSON.parse(err.error).message;
            }
        );
    }
}