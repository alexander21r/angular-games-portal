import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { Game } from '../models';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<Game>,
    next: HttpHandler
  ): Observable<HttpEvent<Game[]>> {
    req = req.clone({
      setParams: {
        key: env.API_KEY,
      },
    });
    return next.handle(req);
  }
}
