import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleFactura',
  templateUrl: './detalleFactura.component.html',
  // styleUrls: ['./detalleFactura.component.css']
})
export class DetalleFacturaComponent implements OnInit {
  currentFactura = null;
  message = '';

  constructor(
    private facturaService: FacturaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getFactura(this.route.snapshot.paramMap.get('id'));
  }

  getFactura(id: any) {
    this.facturaService.get(id)
      .subscribe(
        data => {
          this.currentFactura = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFactura() {
    this.facturaService.update(this.currentFactura.id, this.currentFactura)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'La Factura se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteFactura() {
    this.facturaService.delete(this.currentFactura.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/facturas']);
        },
        error => {
          console.log(error);
        });
  }
}