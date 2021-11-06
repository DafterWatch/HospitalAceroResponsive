import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroBusqueda, RegistroDetailsService, RegistroListaPacienteBusqueda } from 'src/app/services/registro-details.service';

@Component({
  selector: 'app-resgistro-lista-paciente',
  templateUrl: './resgistro-lista-paciente.component.html',
  styleUrls: ['./resgistro-lista-paciente.component.scss']
})
export class ResgistroListaPacienteComponent implements OnInit {

  constructor(private registroService:RegistroDetailsService, private router:Router) { }
  datosBusquedaRegistro: RegistroBusqueda={
    doctorId: 0,
    idusuarios: 0
  };
  datosBuscados:RegistroListaPacienteBusqueda[]=[];
  nombreUsuario:any;
  nombrePaciente:any;
  idDoc:any;
  idPaciente:any;
  ngOnInit(): void {
    this.idDoc = sessionStorage.getItem('usuarioId')+"";
    this.nombreUsuario = sessionStorage.getItem('usuarioNombre');
    this.idPaciente = sessionStorage.getItem('idPaciente');
    this.nombrePaciente = sessionStorage.getItem('nombrePaciente');
    this.datosBusquedaRegistro.doctorId = this.idDoc;
    this.datosBusquedaRegistro.idusuarios = this.idPaciente;
    this.listarRegistro();
  }
  listarRegistro(){
    this.registroService.getRegistroUnPaciente(this.datosBusquedaRegistro).subscribe(
      res => {
        console.log(res);        
        this.datosBuscados=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
