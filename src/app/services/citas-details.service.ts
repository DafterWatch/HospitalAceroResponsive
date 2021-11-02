import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }

  getCitasLista(cita:any){
    return this.http.get(this.url+'/getCitas/'+cita);
  }
  addCitaRegistro(cita:CitaRegistro){
    return this.http.post(this.url+'/addCita',cita);
  }
}
export interface CitaLista{
  idusuarios:number;
  nombreusuario:string;
  fecha:string;
  estado:boolean;
}
export interface CitaRegistro{
  fecha:string;
  doctorId:number;
  pacienteId:number;
  estado:boolean;
}
