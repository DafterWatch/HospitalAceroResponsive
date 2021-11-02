import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDetailsService } from 'src/app/services/area-details.service';

@Component({
  selector: 'app-sacar-fichas',
  templateUrl: './sacar-fichas.component.html',
  styleUrls: ['./sacar-fichas.component.scss']
})
export class SacarFichasComponent implements OnInit {

  constructor(private service:AreaDetailsService, public router: Router) { }
  areasData:any;
  nombreUsuario:string|any;
  ngOnInit(): void {
    this.areasData = this.service.areaDetalles;
    let nombre = sessionStorage.getItem('usuarioNombre');
    this.nombreUsuario = nombre;
  }
  irConfirmarFicha(area:any){
    sessionStorage.setItem('area', area);
    this.router.navigate(['confirmarFicha']);
  }
}
