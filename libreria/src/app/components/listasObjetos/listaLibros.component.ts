import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
    selector: 'app-listaLibros',
    templateUrl: './listaLibros.component.html',
    styleUrls: ['./listaLibros.component.css']
})
export class ListaLibrosComponent implements OnInit {

    libros: any;
    generos = [];
    autores = [];
    editoriales = [];
    seleccionado = null;
    ascendente = true;
    currentLibro = null;
    currentIndex = -1;

    constructor(private libroService: LibroService) { }

    ngOnInit() {
        this.retrieveLibros();

    }



    retrieveLibros() {
        this.libroService.getAll()
            .subscribe(
                data => {
                    this.libros = data;
                    this.getFilers();
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }

    getFilers() {
        var generosAux = {};
        var autoresAux = {}, editorialesAux = {};
        for (let libro in this.libros) {
            this.generos.push({ genero: this.libros[libro].genero, seleccionado: false });
            this.autores.push({ autor: this.libros[libro].autor, seleccionado: false });
            this.editoriales.push({ editorial: this.libros[libro].editorial, seleccionado: false });
        }
        this.generos = this.generos.filter(o => generosAux[o.genero] ? false : generosAux[o.genero] = true);
        this.autores = this.autores.filter(o => autoresAux[o.autor] ? false : autoresAux[o.autor] = true);
        this.editoriales = this.editoriales.filter(o => editorialesAux[o.editorial] ? false : editorialesAux[o.editorial] = true);

    }

    refreshList() {
        this.retrieveLibros();
        this.currentLibro = null;
        this.currentIndex = -1;
    }

    setActiveLibro(libro: any, index: number) {
        this.currentLibro = libro;
        this.currentIndex = index;
    }

    removeAllLibros() {
        this.libroService.deleteAll()
            .subscribe(
                response => {
                    console.log(response);
                    this.retrieveLibros();
                },
                error => {
                    console.log(error);
                });
    }

    orderByField(field, direction) {
        if (direction == 'desc'){
            this.libros.sort((a, b) => {return (a[field] > b[field]) ? -1 : ((a[field] > b[field]) ? 1 : 0)});
        } else {
            this.libros.sort((a, b) => {return (a[field] < b[field]) ? -1 : ((a[field] > b[field]) ? 1 : 0)});
        }
    }
}