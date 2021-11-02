import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctoresDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }
  getDoctoresLista(){
    return this.http.get(this.url+'/getDoctores');
  }
  getUnDoctor(id:string){
    return this.http.get(this.url+'/getDoctores/'+id);
  }
  doctoresDetalles=[
    {
      id:1,
      doctorName:"Hugo",
      doctorDetails:"Cirujano",
      doctorImg:"assets/img/doc1.jpg"
    }
  ]
}
export interface DoctoresLista{
  id:string,
  doctorName:string,
  doctorDetails:string,
  doctorImg:string
}
