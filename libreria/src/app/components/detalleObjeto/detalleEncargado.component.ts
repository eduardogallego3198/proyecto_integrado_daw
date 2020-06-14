import { Component, OnInit } from '@angular/core';
import { EncargadoService } from 'src/app/services/encargado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleencargado',
  templateUrl: './detalleencargado.component.html',
  // styleUrls: ['./detalleencargado.component.css']
})
export class DetalleEncargadoComponent implements OnInit {
  currentEncargado = null;
  message = '';

  constructor(
    private encargadoService: EncargadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getEncargado(this.route.snapshot.paramMap.get('id'));
  }

  getEncargado(id: any) {
    this.encargadoService.get(id)
      .subscribe(
        data => {
          this.currentEncargado = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEncargado() {
    this.encargadoService.update(this.currentEncargado.id, this.currentEncargado)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El encargado se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteEncargado() {
    this.encargadoService.delete(this.currentEncargado.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/encargados']);
        },
        error => {
          console.log(error);
        });
  }
}