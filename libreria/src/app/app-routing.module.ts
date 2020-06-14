import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './components/acercaDe.component';
import { ContactoComponent } from './components/contacto.component';
import { InicioComponent } from './components/inicio.component';
import { LoginComponent } from './components/login.component';
import { RegistroComponent } from './components/registro.component';
import { ListaAlbaranesComponent } from './components/listasObjetos/listaAlbaranes.component';
import { ListaClientesComponent } from './components/listasObjetos/listaClientes.component';
import { ListaConsultasComponent } from './components/listasObjetos/listaConsultas.component';
import { ListaLineasDevolucionesComponent } from './components/listasObjetos/listaLineasDevoluciones.component';
import { ListaEncargadosComponent } from './components/listasObjetos/listaEncargados.component';
import { ListaFacturasComponent } from './components/listasObjetos/listaFacturas.component';
import { ListaLibrosComponent } from './components/listasObjetos/listaLibros.component';
import { ListaPedidosComponent } from './components/listasObjetos/listaPedidos.component';
import { ListaLineasPedidosProveedoresComponent } from './components/listasObjetos/listaLineasPedidosProveedores.component';
import { ListaRespuestasComponent } from './components/listasObjetos/listaRespuestas.component';
import { DetalleAlbaranComponent } from './components/detalleObjeto/detalleAlbaran.component';
import { DetalleClienteComponent } from './components/detalleObjeto/detalleCliente.component';
import { DetalleConsultaComponent } from './components/detalleObjeto/detalleConsulta.component';
import { DetalleDevolucionComponent } from './components/detalleObjeto/detalleDevolucion.component';
import { DetalleEncargadoComponent } from './components/detalleObjeto/detalleEncargado.component';
import { DetalleFacturaComponent } from './components/detalleObjeto/detalleFactura.component';
import { DetalleLibroComponent } from './components/detalleObjeto/detalleLibro.component';
import { DetalleLineaDevolucionComponent } from './components/detalleObjeto/detalleLineaDevolucion.component';
import { DetalleLineaPedidoComponent } from './components/detalleObjeto/detalleLineaPedido.component';
import { DetalleLineaPedidoProveedorComponent } from './components/detalleObjeto/detalleLineaPedidoProveedor.component';
import { DetallePedidoComponent } from './components/detalleObjeto/detallePedido.component';
import { DetallePedidoProveedorComponent } from './components/detalleObjeto/detallePedidoProveedor.component';
import { DetalleRespuestaComponent } from './components/detalleObjeto/detalleRespuesta.component';
import { NuevoAlbaranComponent } from './components/nuevoObjeto/nuevoAlbaran.component';
import { NuevoClienteComponent } from './components/nuevoObjeto/nuevoCliente.component';
import { NuevaConsultaComponent } from './components/nuevoObjeto/nuevaConsulta.component';
import { NuevaDevolucionComponent } from './components/nuevoObjeto/nuevaDevolucion.component';
import { NuevoEncargadoComponent } from './components/nuevoObjeto/nuevoEncargado.component';
import { NuevaFacturaComponent } from './components/nuevoObjeto/nuevaFactura.component';
import { NuevoLibroComponent } from './components/nuevoObjeto/nuevoLibro.component';
import { NuevaLineaDevolucionComponent } from './components/nuevoObjeto/nuevaLineaDevolucion.component';
import { NuevoPedidoComponent } from './components/nuevoObjeto/nuevoPedido.component';
import { NuevaLineaPedidoProveedorComponent } from './components/nuevoObjeto/nuevaLineaPedidoProveedor.component';
import { NuevaRespuestaComponent } from './components/nuevoObjeto/nuevaRespuesta.component';
import { ListaPedidosProveedoresComponent } from './components/listasObjetos/listaPedidosProveedores.component';
import { AreaClienteComponent } from './components/areaCliente.component';
import { AreaAdminComponent } from './components/areaAdmin.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'areaCliente', component: AreaClienteComponent },
  { path: 'areaAdmin', component: AreaAdminComponent },
  { path: 'albaranes', component: ListaAlbaranesComponent },
  { path: 'albaranes/:id', component: DetalleAlbaranComponent },
  { path: 'albaranes/add', component: NuevoAlbaranComponent },
  { path: 'detalleCliente', component: DetalleClienteComponent },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/:id', component: DetalleClienteComponent },
  { path: 'clientes/add', component: NuevoClienteComponent },
  { path: 'consultas', component: ListaConsultasComponent },
  { path: 'consultas/:id', component: DetalleConsultaComponent },
  { path: 'consultas/add', component: NuevaConsultaComponent },
  { path: 'devoluciones', component: ListaLineasDevolucionesComponent },
  { path: 'devoluciones/:id', component: DetalleDevolucionComponent },
  { path: 'devoluciones/add', component: NuevaDevolucionComponent },
  { path: 'encargados', component: ListaEncargadosComponent },
  { path: 'encargados/:id', component: DetalleEncargadoComponent },
  { path: 'encargados/add', component: NuevoEncargadoComponent },
  { path: 'facturas', component: ListaFacturasComponent },
  { path: 'facturas/:id', component: DetalleFacturaComponent },
  { path: 'facturas/add', component: NuevaFacturaComponent },
  { path: 'libros', component: ListaLibrosComponent },
  { path: 'libros/:id', component: DetalleLibroComponent },
  { path: 'libros/add', component: NuevoLibroComponent },
  { path: 'lineasDevoluciones', component: ListaLineasDevolucionesComponent },
  { path: 'lineasDevoluciones/:id', component: DetalleLineaDevolucionComponent },
  { path: 'lineasDevoluciones/add', component: NuevaLineaDevolucionComponent },
  { path: 'lineasPedidos', component: ListaPedidosComponent },
  { path: 'lineasPedidos/:id', component: DetalleLineaPedidoComponent },
  { path: 'lineasPedidos/add', component: NuevoPedidoComponent },
  { path: 'lineasPedidosProveedores', component: ListaLineasPedidosProveedoresComponent },
  { path: 'lineasPedidosProveedores/:id', component: DetalleLineaPedidoProveedorComponent },
  { path: 'lineasPedidosProveedores/add', component: NuevaLineaPedidoProveedorComponent },
  { path: 'pedidos', component: ListaPedidosComponent },
  { path: 'pedidos/:id', component: DetallePedidoComponent },
  { path: 'pedidos/add', component: NuevoPedidoComponent },
  { path: 'pedidosProveedores', component: ListaPedidosProveedoresComponent },
  { path: 'pedidosProveedores/:id', component: DetallePedidoProveedorComponent },
  { path: 'pedidosProveedores/add', component: NuevoPedidoComponent },
  { path: 'respuestas', component: ListaRespuestasComponent },
  { path: 'respuestas/:id', component: DetalleRespuestaComponent },
  { path: 'respuestas/add', component: NuevaRespuestaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
