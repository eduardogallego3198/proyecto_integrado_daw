import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const CLIENTE_KEY = 'auth-cliente';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageClienteService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public removeAuthCliente() {
    window.sessionStorage.removeItem('auth-cliente');
  }

  public saveUser(cliente) {
    window.sessionStorage.removeItem(CLIENTE_KEY);
    window.sessionStorage.setItem(CLIENTE_KEY, JSON.stringify(cliente));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(CLIENTE_KEY));
  }
}