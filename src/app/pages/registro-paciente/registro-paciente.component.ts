import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroDetailsService, RegistroLista, RegistroAdd} from 'src/app/services/registro-details.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.scss']
})
export class RegistroPacienteComponent implements OnInit {

  constructor(private registroService:RegistroDetailsService, private router:Router) { }
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
    fechaConsulta: ''
  }
  registroPacienteNuevo:RegistroAdd={
    doctorId: '',
    pacienteId: '',
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
    this.registroPacienteNuevo.doctorId = registroObjeto.idDoctor;
    this.registroPacienteNuevo.pacienteId = registroObjeto.idusuarios;
    this.registroPacienteNuevo.fechaConsulta = registroObjeto.fechaConsulta;
    this.registroService.addRegistroMedico(this.registroPacienteNuevo).subscribe(
      res=>{
        alert("Se guardo el registro medico");
        this.router.navigate(['verFichas']);    
      },
      err=>{
        console.log(err);        
      }
    );
  }
}
