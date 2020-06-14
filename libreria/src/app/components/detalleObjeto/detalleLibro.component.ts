import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalleLibro',
  templateUrl: './detalleLibro.component.html',
  // styleUrls: ['./detalleLibro.component.css']
})
export class DetalleLibroComponent implements OnInit {
  currentLibro = null;
  message = '';

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getLibro(this.route.snapshot.paramMap.get('id'));
  }

  getLibro(id: any) {
    this.libroService.get(id)
      .subscribe(
        data => {
          this.currentLibro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateLibro() {
    this.libroService.update(this.currentLibro.id, this.currentLibro)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El libro se ha modificado correctamente';
        },
        error => {
          console.log(error);
        });
  }

  deleteLibro() {
    this.libroService.delete(this.currentLibro.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/libros']);
        },
        error => {
          console.log(error);
        });
  }
}