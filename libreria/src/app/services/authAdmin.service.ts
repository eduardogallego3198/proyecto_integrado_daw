import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/libreria/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthAdminService {

    constructor(private http: HttpClient) { }

    login(credentials): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
            nombre_usuario: credentials.nombre_usuario,
            password: credentials.password
        }, httpOptions);
    }

    register(encargado): Observable<any> {
        return this.http.post(AUTH_API + 'registro', {
            nombre: encargado.nombre,
            apellidos: encargado.apellidos,
            nombre_usuario: encargado.nombre_usuario,
            password: encargado.password
        }, httpOptions);
    }
}