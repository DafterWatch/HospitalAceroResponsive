import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDetailsService, AreaLista } from 'src/app/services/area-details.service';

@Component({
  selector: 'app-sacar-fichas',
  templateUrl: './sacar-fichas.component.html',
  styleUrls: ['./sacar-fichas.component.scss']
})
export class SacarFichasComponent implements OnInit {

  constructor(private areaService:AreaDetailsService, public router: Router) { }
  areasData:AreaLista[] = [];
  nombreUsuario:string|any;
  ngOnInit(): void {
    this.listaAreas();
    let nombre = sessionStorage.getItem('usuarioNombre');
    this.nombreUsuario = nombre;
  }
  irConfirmarFicha(area:any){
    sessionStorage.setItem('area', area);
    this.router.navigate(['confirmarFicha']);
  }
  listaAreas(){
    this.areaService.getAreaLista().subscribe(
      res => {
        this.areasData=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
