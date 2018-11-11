import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IUserInfo } from './user-info';


@Injectable()
export class AccountService {
  private apiURL = 'api/Account'

  constructor(private http: HttpClient) { }

  create(userInfo:IUserInfo):Observable<any>{
    return this.http.post<any>(this.apiURL+"/Create",userInfo);
  }

  login(userInfo:IUserInfo):Observable<any>{
    return this.http.post<any>(this.apiURL+"/Login",userInfo);
  }

  obtenerToken():string{
    return localStorage.getItem("token");
  }

  obtenerExpiracionToken():string{
    return localStorage.getItem("tokenExpiration");
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }

  estaLogueado():boolean{
    var exp=this.obtenerExpiracionToken();

    if(!exp){
      //el token no existe
      return false;
    }

    var now=new Date().getTime();
    var dateExp=new Date(exp);

    if(now>=dateExp.getTime()){
      //ya expiro el token
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      return false;
    }else{
      return true;
    }
  }

}
