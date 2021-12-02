import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }

  getUsuarioLogin(equipo:UsuarioLogin){
    return this.http.post(this.url+'/getUsuariosLogin', equipo);
  }
  addUsuarioRegistro(usuario:UsuarioRegistro){
    return this.http.post(this.url+'/addUsuario',usuario);
  }
  getPerfil(id:any){
    return this.http.get(this.url+'/getPerfil/'+id);
  }
}
export interface UsuarioLogin{
  correousuario:string;
  contrausuario:string;
}

export interface UsuarioTipo{
  idusuarios:string,
  nombreusuario:string,
  correousuario:string;
  contrausuario:string;
  categoria:string;
}
export interface UsuarioRegistro{
  nombreusuario:string,
  correousuario:string;
  contrausuario:string;
  categoria:string;
}
export interface PerfilTipo{
  idusuarios:string,
  correousuario:string;
  contrausuario:string;
  categoria:string;
  nombreusuario:string;
}