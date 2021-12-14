import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {
  constructor(private http:HttpClient){

  }

  Url='http://localhost:8080/usuariodata';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.Url);
  }

  addUsuario(usuario){
    return this.http.post(this.Url,usuario);
  }

  editUsuario(usuario){
    return this.http.put(this.Url+`/${usuario.id_USUARIO}`, usuario)
  }

  deleteUsuario(id){
    return this.http.delete(this.Url+`/${id}`)
  }
}
