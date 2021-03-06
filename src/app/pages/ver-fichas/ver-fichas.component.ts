import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasDetailsService, CitaLista } from 'src/app/services/citas-details.service';

@Component({
  selector: 'app-ver-fichas',
  templateUrl: './ver-fichas.component.html',
  styleUrls: ['./ver-fichas.component.scss']
})
export class VerFichasComponent implements OnInit {

  constructor(private citaService:CitasDetailsService, private router:Router) { }
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
  irRegistroPaciente(id:any){
    sessionStorage.setItem('idPaciente',id);
    this.router.navigate(['registroPaciente']);
  }
  irRegistrosListaPaciente(id:any, nombreus:string){
    sessionStorage.setItem('idPaciente',id);
    sessionStorage.setItem('nombrePaciente',nombreus);
    this.router.navigate(['registroPacienteLista']);
  }
}
