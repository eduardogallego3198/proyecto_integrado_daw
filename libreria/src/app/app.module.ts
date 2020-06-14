import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaLibrosModule } from './components/listasObjetos/listaLibros.module';
import { AreaClienteComponent } from './components/areaCliente.component';
import { LoginComponent } from './components/login.component';
import { RegistroComponent } from './components/registro.component';
import { InicioComponent } from './components/inicio.component';
import { AreaAdminComponent } from './components/areaAdmin.component';
import { AdminAuthInterceptor } from '../app/helpers/authAdmin.interceptor'
import { ClienteAuthInterceptor } from '../app/helpers/authCliente.interceptor'
import { DetalleClienteComponent } from './components/detalleObjeto/detalleCliente.component'
import { ListaPedidosComponent } from './components/listasObjetos/listaPedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    AreaClienteComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    AreaClienteComponent,
    AreaAdminComponent,
    DetalleClienteComponent,
    ListaPedidosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ListaLibrosModule,
  ],
  providers: [AdminAuthInterceptor, ClienteAuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
