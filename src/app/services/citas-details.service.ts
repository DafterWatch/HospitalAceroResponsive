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
  getCitasListaPaciente(cita:any){
    return this.http.get(this.url+'/getCitasPaciente/'+cita);
  }
  addCitaRegistro(cita:CitaRegistro){
    return this.http.post(this.url+'/addCita',cita);
  }
}
export interface CitaLista{
  idusuarios:number;
  nombreusuario:string;
  fecha:string;
  hora:string;
  estado:boolean;
}
export interface CitaRegistro{
  fecha:string;  
  hora:string;
  doctorId:number;
  pacienteId:number;
  estado:boolean;  
}
export interface CitaPaciente{
  id:number,
  doctorDetails:string,
  doctorName:string,
  fecha:string,
  hora:string,
  estado:boolean
}
