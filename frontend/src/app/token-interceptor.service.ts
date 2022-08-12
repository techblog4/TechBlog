import { Injectable ,Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept ( req:any, next:any){
    let authService =this.injector.get(ServiceService)
    let tokenizedreq = req.clone(
      { setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`
      }
      }
    )
    return next.handle(tokenizedreq);
  }
}
