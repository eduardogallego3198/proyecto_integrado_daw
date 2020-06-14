import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/libreria';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(baseUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(baseUrl + 'areaAdmin', { responseType: 'text' });
  }

  getAll() {
    return this.http.get(baseUrl + 'encargados');
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/encargados/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrl + 'encargados', data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/encargados/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/encargados/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl + 'encargados');
  }

  findByField(field: any, value: any) {
    return this.http.get(`${baseUrl}/encargados?${field}=${value}`);
  }
}