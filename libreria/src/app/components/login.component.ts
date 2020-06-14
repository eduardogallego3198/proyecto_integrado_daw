import { Component, OnInit } from '@angular/core';
import { AuthClienteService } from '../services/authCliente.service';
import { TokenStorageClienteService } from '../services/token-storage-cliente.service';
import { AuthAdminService } from '../services/authAdmin.service';
import { TokenStorageAdminService } from '../services/token-storage-admin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {};
    isLoggedIn = false;
    adminLoggedIn = false;
    clienteLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authCliente: AuthClienteService, private tokenStorageCliente: TokenStorageClienteService,
        private authAdmin: AuthAdminService, private tokenStorageAdmin: TokenStorageAdminService, private router: Router) { }

    ngOnInit() {
        if (this.tokenStorageCliente.getToken()) {
            this.isLoggedIn = true;
            this.clienteLoggedIn = true;
            this.tokenStorageCliente.getUser().rol;
        }
        if (this.tokenStorageAdmin.getToken()) {
            this.isLoggedIn = true;
            this.adminLoggedIn = true;
            this.tokenStorageAdmin.getAdmin().rol;
        }
    }

    onSubmit() {
            this.authCliente.login(this.form).subscribe(
                data => {
                    this.tokenStorageCliente.saveToken(data.accessToken);
                    this.tokenStorageCliente.saveUser(data);
                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.clienteLoggedIn = true;
                    this.roles = this.tokenStorageCliente.getUser().rol;
                    this.reloadPage();
                    this.router.navigateByUrl('/');

                },
                err => {
                    this.errorMessage = err.error.message;
                    this.isLoginFailed = true;
                }
            );

            this.authAdmin.login(this.form).subscribe(
                data => {
                    this.tokenStorageAdmin.saveToken(data.accessToken);
                    this.tokenStorageAdmin.saveAdmin(data);

                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.adminLoggedIn = true;
                    this.roles = this.tokenStorageAdmin.getAdmin().rol;
                    this.reloadPage();
                    this.router.navigateByUrl('/');
                },
                err => {
                    this.errorMessage = err.error.message;
                    this.isLoginFailed = true;
                }
            );
        console.log(this.roles)
    }

    reloadPage() {
        window.location.reload();
        // if (this.clienteLoggedIn) {
        //     this.tokenStorageCliente.removeAuthCliente();
        // } else if (this.adminLoggedIn) {

        // }
    }
}