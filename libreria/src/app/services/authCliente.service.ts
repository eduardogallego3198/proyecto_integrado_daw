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
export class AuthClienteService {

    constructor(private http: HttpClient) { }

    login(credentials): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
            nombre_usuario: credentials.nombre_usuario,
            password: credentials.password
        }, httpOptions);
    }

    register(cliente): Observable<any> {
        return this.http.post(AUTH_API + 'registro', {
            nombre: cliente.nombre,
            apellidos: cliente.apellidos,
            direccion: cliente.direccion,
            dni: cliente.dni,
            telefono: cliente.telefono,
            email: cliente.email,
            nombre_usuario: cliente.nombre_usuario,
            password: cliente.password
        }, httpOptions);
    }
}