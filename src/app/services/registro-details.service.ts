import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroDetailsService {
  url = '/api'
  constructor(private http: HttpClient) { }
  getRegistro(id:any){
    return this.http.get(this.url+'/getRegistro/'+id);
  }
  editRegistro(registro:RegistroUpdate){
    console.log(registro);
    return this.http.put(this.url+'/modificarRegistro', registro);
  }
}
export interface RegistroLista{
  idRegistro: string;
  idDoctor: string;
  idusuarios: string;
  doctorName: string;
  nombreusuario: string;
  fechaConsulta: string;
  datosConsulta:string;
  instruccionesDoctor:string;
  recetaMedica:string;
}
export interface RegistroUpdate{
  idRegistro: string;
  idusuarios: string;
  fechaConsulta: string;
  datosConsulta:string;
  instruccionesDoctor:string;
  recetaMedica:string;
}
