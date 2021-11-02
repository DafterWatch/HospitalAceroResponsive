import { Component, OnInit } from '@angular/core';
import { CitasDetailsService, CitaLista } from 'src/app/services/citas-details.service';

@Component({
  selector: 'app-ver-fichas',
  templateUrl: './ver-fichas.component.html',
  styleUrls: ['./ver-fichas.component.scss']
})
export class VerFichasComponent implements OnInit {

  constructor(private citaService:CitasDetailsService) { }
  ListarCitas: CitaLista[] = [];
  nombreUsuario:any;
  idDoc:any;
  ngOnInit(): void {
    this.idDoc = sessionStorage.getItem('usuarioId')+"";
    this.nombreUsuario = sessionStorage.getItem('usuarioNombre');
    this.listarCitas();
  }
  listarCitas(){
    this.citaService.getCitasLista(this.idDoc).subscribe(
      res => {
        this.ListarCitas=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
