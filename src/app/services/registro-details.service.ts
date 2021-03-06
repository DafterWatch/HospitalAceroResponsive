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
  addRegistroMedico(cita:RegistroAdd){
    return this.http.post(this.url+'/addRegistroMedico',cita);
  }
  getRegistroUnPaciente(cita:any){
    return this.http.post(this.url+'/getRegistroListaPacienteUno',cita);
  }
}
export interface RegistroLista{
  idRegistro: string;
  idDoctor: string;
  idusuarios: string;
  doctorName: string;
  nombreusuario: string;
  fechaConsulta: string;
}
export interface RegistroAdd{
  doctorId: string;
  pacienteId: string;
  fechaConsulta: string;
  datosConsulta: string;
  instruccionesDoctor: string;
  recetaMedica: string;
}
export interface RegistroBusqueda{
  doctorId:number;
  idusuarios:number;
}
export interface RegistroListaPacienteBusqueda{
  idRegistro:string;
  idDoctor:string;
  idusuarios:string;
  doctorName:string;
  nombreusuario:string;  
  doctorDetails:string;
  fechaConsulta:string;
  datosConsulta:string;
  instruccionesDoctor:string;
  recetaMedica:string;
}