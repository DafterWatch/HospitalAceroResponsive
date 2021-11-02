import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaDetailsService {

  url = '/api'
  constructor(private http: HttpClient) { }
  areaDetalles=[
    {
      id:1,
      areaName:"Oftalmologia",
      areaImg:"assets/img/area1.jpg"
    }
  ]
  getAreaLista(){
    return this.http.get(this.url+'/getAreas');
  }
  getUnArea(id:string){
    return this.http.get(this.url+'/getAreas/'+id);
  }
  getUnAreaName(areaName:string){
    return this.http.get(this.url+'/getAreasName/'+areaName);
  }
}
export interface AreaLista{
  id:string;
  areaName: string;
  areaImg: string;
}
