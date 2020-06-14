import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ListaLibrosComponent } from './listaLibros.component';
import { FormsModule } from '@angular/forms';

@NgModule ({
  imports: [
      CommonModule, FormsModule
  ], 
  declarations: [
      ListaLibrosComponent
  ]
})

export class ListaLibrosModule {}