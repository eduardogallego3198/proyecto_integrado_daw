import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageClienteService } from '../services/token-storage-cliente.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class ClienteAuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageClienteService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorClienteProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: ClienteAuthInterceptor, multi: true }
];