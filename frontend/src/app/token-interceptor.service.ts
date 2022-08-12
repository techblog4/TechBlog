import { Injectable ,Injector} from '@angular/core';
import {  HttpInterceptor} from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';


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
