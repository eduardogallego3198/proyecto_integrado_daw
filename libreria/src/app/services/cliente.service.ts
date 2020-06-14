import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/libreria/';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(baseUrl + 'areaCliente', { responseType: 'text' });
  }

  getAll() {
    return this.http.get(baseUrl + 'clientes');
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/clientes/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrl + 'registro', data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/clientes/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/clientes/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl + 'clientes');
  }

  findByField(field: any, value: any) {
    return this.http.get(`${baseUrl}/clientes?${field}=${value}`);
  }
}