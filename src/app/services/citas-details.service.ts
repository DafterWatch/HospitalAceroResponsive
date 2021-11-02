import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }

  getCitasLista(cita:CitaLista){
    return this.http.post(this.url+'/getUsuariosLogin', cita);
  }
  addCitaRegistro(cita:CitaRegistro){
    return this.http.post(this.url+'/addCita',cita);
  }
}
export interface CitaLista{
  id:number;
  fecha:string;
  doctorId:number;
  pacienteId:number;
  estado:boolean;
}
export interface CitaRegistro{
  fecha:string;
  doctorId:number;
  pacienteId:number;
  estado:boolean;
}
