import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaPaciente, CitasDetailsService } from 'src/app/services/citas-details.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss']
})
export class ListaCitasComponent implements OnInit {

  constructor(private citaService:CitasDetailsService, private router:Router) { }
  idUsuario:any;
  nombreUsuario:any;
  ListarCitas: CitaPaciente[] = [];
  ngOnInit(): void {
    this.idUsuario = sessionStorage.getItem('usuarioId');
    this.nombreUsuario = sessionStorage.getItem('usuarioNombre');
    console.log(this.idUsuario);
    this.listarCitas();
  }
  listarCitas(){
    this.citaService.getCitasListaPaciente(this.idUsuario).subscribe(
      res => {
        this.ListarCitas=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
