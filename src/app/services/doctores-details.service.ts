import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctoresDetailsService {

  constructor() { }

  doctoresDetalles=[
    {
      id:1,
      doctorName:"Hugo",
      doctorDetails:"Cirujano",
      doctorPrecio:200,
      doctorImg:"assets/img/doc1.jpg"
    },
    {
      id:2,
      doctorName:"Paco",
      doctorDetails:"Psiquiatra",
      doctorPrecio:100,
      doctorImg:"assets/img/doc2.jpg"
    },
    {
      id:3,
      doctorName:"Luis",
      doctorDetails:"Dermatologo",
      doctorPrecio:300,
      doctorImg:"assets/img/doc3.jpg"
    },
    {
      id:4,
      doctorName:"Donald",
      doctorDetails:"Quiropractico",
      doctorPrecio:200,
      doctorImg:"assets/img/doc4.jpg"
    },
    {
      id:5,
      doctorName:"Carioca",
      doctorDetails:"Endocrinologo",
      doctorPrecio:200,
      doctorImg:"assets/img/doc5.jpg"
    },
    {
      id:6,
      doctorName:"Pistoles",
      doctorDetails:"Dentista",
      doctorPrecio:200,
      doctorImg:"assets/img/doc6.jpg"
    },
  ]
}
