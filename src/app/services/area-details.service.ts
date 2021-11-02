import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaDetailsService {

  constructor() { }
  areaDetalles=[
    {
      id:1,
      areaName:"Oftalmologia",
      areaImg:"assets/img/area1.jpg"
    },
    {
      id:2,
      areaName:"Cardiologia",
      areaImg:"assets/img/area2.jpg"
    },
    {
      id:3,
      areaName:"Neumologia",
      areaImg:"assets/img/area3.jpg"
    },
    {
      id:4,
      areaName:"Pediatria",
      areaImg:"assets/img/area4.jpg"
    },
    {
      id:5,
      areaName:"Endocrinologia",
      areaImg:"assets/img/area5.jpg"
    },
    {
      id:6,
      areaName:"Psiquiatria",
      areaImg:"assets/img/area6.jpg"
    }
  ]
}
