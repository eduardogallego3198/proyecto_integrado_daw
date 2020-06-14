import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-nuevoLibro',
  templateUrl: './nuevoLibro.component.html',
  // styleUrls: ['./nuevoLibro.component.css']
})
export class NuevoLibroComponent implements OnInit {
  libro = {
    titulo: '',
    autor: '',
    editorial: '',
    genero: '',
    ano_publicacion: '',
    paginas: '',
    desripcion: '',
    stock: '',
    precio: ''
  };

  constructor(private libroService: LibroService) { }

  ngOnInit() {
  }

  savelibro() {
    const data = {
        titulo: this.libro.titulo,
        autor: this.libro.autor,
        editorial: this.libro.editorial,
        genero: this.libro.genero,
        ano_publicacion: this.libro.ano_publicacion,
        paginas: this.libro.paginas,
        desripcion: this.libro.desripcion,
        stock: this.libro.stock,
        precio: this.libro.stock
    };

    this.libroService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newlibro() {
    this.libro = {
        titulo: '',
        autor: '',
        editorial: '',
        genero: '',
        ano_publicacion: '',
        paginas: '',
        desripcion: '',
        stock: '',
        precio: ''
      };
  }
}