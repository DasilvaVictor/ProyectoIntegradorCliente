import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpEvent<any>> {
    return next.handle(req).do(evt =>{
      if(evt instanceof HttpResponse){
        console.log(evt.body);
      }
    });
   }
 constructor(){}

}
