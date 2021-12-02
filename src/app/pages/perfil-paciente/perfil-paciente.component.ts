import { Component, OnInit } from '@angular/core';
import { PerfilTipo, UsuariosDetailsService } from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {

  constructor(private usuarioService:UsuariosDetailsService) { }
  idUsuario:any;
  perfil:PerfilTipo | any;
  nombre="";
  id="";
  correo="";
  contra="";
  categoria="";
  ngOnInit(): void {
    this.idUsuario = sessionStorage.getItem('usuarioId');
    this.getPerfilLista();
  }
  getPerfilLista(){
    this.usuarioService.getPerfil(this.idUsuario).subscribe(
      res => {
        this.perfil=<any>res;
        console.log(this.perfil);
        this.nombre = this.perfil.nombreusuario; 
        this.id = this.perfil.idusuarios; 
        this.correo = this.perfil.correousuario; 
        this.contra = this.perfil.contrausuario; 
        this.categoria = this.perfil.categoria; 
      },
      err => {
        console.log(err);
      }
    );
  }
}
