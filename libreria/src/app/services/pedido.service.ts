import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/libreria/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByField(field: any, value: any) {
    return this.http.get(`${baseUrl}?${field}=${value}`);
  }
}