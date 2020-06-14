import { Component, OnInit } from '@angular/core';
import { DevolucionService } from 'src/app/services/devolucion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleDevolucion',
  templateUrl: './detalleDevolucion.component.html',
  // styleUrls: ['./detalleDevolucion.component.css']
})
export class DetalleDevolucionComponent implements OnInit {
  currentDevolucion = null;
  message = '';

  constructor(
    private devolucionService: DevolucionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getDevolucion(this.route.snapshot.paramMap.get('id'));
  }

  getDevolucion(id: any) {
    this.devolucionService.get(id)
      .subscribe(
        data => {
          this.currentDevolucion = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateDevolucion() {
    this.devolucionService.update(this.currentDevolucion.id, this.currentDevolucion)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La Devolucion se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteDevolucion() {
    this.devolucionService.delete(this.currentDevolucion.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/devoluciones']);
        },
        error => {
          console.log(error);
        });
  }
}