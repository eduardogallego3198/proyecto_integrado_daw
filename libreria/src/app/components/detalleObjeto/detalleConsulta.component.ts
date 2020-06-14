import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleConsulta',
  templateUrl: './detalleConsulta.component.html',
  // styleUrls: ['./detalleConsulta.component.css']
})
export class DetalleConsultaComponent implements OnInit {
  currentConsulta = null;
  message = '';

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getConsulta(this.route.snapshot.paramMap.get('id'));
  }

  getConsulta(id: any) {
    this.consultaService.get(id)
      .subscribe(
        data => {
          this.currentConsulta = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateConsulta() {
    this.consultaService.update(this.currentConsulta.id, this.currentConsulta)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La Consulta se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteConsulta() {
    this.consultaService.delete(this.currentConsulta.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/consultas']);
        },
        error => {
          console.log(error);
        });
  }
}