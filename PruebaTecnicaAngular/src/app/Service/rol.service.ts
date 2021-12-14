import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from '../Model/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient){

  }

  Url='http://localhost:8080/roldata';

  getRol(){
    return this.http.get<Rol[]>(this.Url);
  }

  addRol(rol:Rol){
    return this.http.post<Rol>(this.Url,rol);
  }
}
