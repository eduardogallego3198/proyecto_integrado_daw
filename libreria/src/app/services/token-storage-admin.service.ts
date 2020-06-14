import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const ADMIN_KEY = 'auth-admin';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageAdminService {

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
    window.sessionStorage.removeItem('auth-admin');
  }

  public saveAdmin(admin) {
    window.sessionStorage.removeItem(ADMIN_KEY);
    window.sessionStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  }

  public getAdmin() {
    return JSON.parse(sessionStorage.getItem(ADMIN_KEY));
  }
}