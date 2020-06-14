import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageAdminService } from '../services/token-storage-admin.service';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageAdminService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorAdminProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AdminAuthInterceptor, multi: true }
];