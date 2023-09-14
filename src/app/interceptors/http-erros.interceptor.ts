import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<Request>,
    next: HttpHandler
  ): Observable<HttpEvent<Error>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(() => new Error(err));
      })
    );
  }
}
