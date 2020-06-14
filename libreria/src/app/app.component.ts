import { Component, OnInit } from '@angular/core';
import { TokenStorageAdminService } from './services/token-storage-admin.service';
import { TokenStorageClienteService } from './services/token-storage-cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  title = 'libreria';
  isLoggedIn = false;
  showUserBoard = false;
  showAdminBoard = false;
  nombre_usuario: string;

  constructor(private tokenStorageAdmin: TokenStorageAdminService, private tokenStorageCliente: TokenStorageClienteService) { }

  
  ngOnInit() {
    // if (this.roles.includes('cliente')) {
      this.isLoggedIn = !!this.tokenStorageCliente.getToken() || !!this.tokenStorageAdmin.getToken();
      
      if (this.isLoggedIn && this.tokenStorageCliente.getUser()) {
        const cliente = this.tokenStorageCliente.getUser();
        this.roles = cliente.rol
        
        this.showAdminBoard = false;
        this.showUserBoard = true;
        
        this.nombre_usuario = cliente.nombre_usuario;
      }
      
      if (this.isLoggedIn && this.tokenStorageAdmin.getAdmin()) {
        const admin = this.tokenStorageAdmin.getAdmin();
        this.roles = admin.rol;
        
        this.showAdminBoard = true;
        this.showUserBoard = false;
        
        this.nombre_usuario = admin.nombre_usuario;
      }
    // }
    console.log(this.roles)
  }
  
  logout() {
    if (this.roles.includes('cliente')) {
      this.tokenStorageCliente.signOut();
    } else if (this.roles.includes('admin')) {
      this.tokenStorageAdmin.signOut();
    }
    window.location.reload();
  }

  getBoard() {
    if (this.roles.includes('cliente')) {
      return 'areaCliente';
    } else if (this.roles.includes('admin')) {
      return 'areaAdmin'
    }
  }
}
