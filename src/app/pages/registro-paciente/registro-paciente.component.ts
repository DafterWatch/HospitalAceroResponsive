import { Component, OnInit } from '@angular/core';
import { RegistroDetailsService, RegistroLista, RegistroUpdate} from 'src/app/services/registro-details.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss']
})
export class RegistroPacienteComponent implements OnInit {

  constructor(private registroService:RegistroDetailsService) { }
  idPacienteActual:any;
  ngOnInit(): void {
    this.idPacienteActual = sessionStorage.getItem('idPaciente');
    this.listarRegistro();
  }
  registroPaciente:RegistroLista = {
    idRegistro: '',
    idDoctor: '',    
    doctorName: '',
    idusuarios: '',
    nombreusuario: '',
    fechaConsulta: '',
    datosConsulta: '',
    instruccionesDoctor: '',
    recetaMedica: ''
  }
  registroPacienteUpdate:RegistroUpdate = {
    idRegistro: '',  
    idusuarios: '',
    fechaConsulta: '',
    datosConsulta: '',
    instruccionesDoctor: '',
    recetaMedica: ''
  }
  listarRegistro(){
    this.registroService.getRegistro(this.idPacienteActual).subscribe(
      res => {
        this.registroPaciente=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
  registrarDatosConsulta(registroObjeto:RegistroLista){
    this.registroPacienteUpdate.idRegistro = registroObjeto.idRegistro;
    this.registroPacienteUpdate.idusuarios = registroObjeto.idusuarios;
    this.registroPacienteUpdate.fechaConsulta = registroObjeto.fechaConsulta;
    this.registroPacienteUpdate.datosConsulta = registroObjeto.datosConsulta;
    this.registroPacienteUpdate.instruccionesDoctor = registroObjeto.instruccionesDoctor;
    this.registroPacienteUpdate.recetaMedica = registroObjeto.recetaMedica;
    this.registroService.editRegistro(this.registroPacienteUpdate).subscribe(
      res=>{
        console.log(res);
        alert("datos actualizados");      
      },
      err=>{
        console.log(err);        
      }
    );
  }
}
