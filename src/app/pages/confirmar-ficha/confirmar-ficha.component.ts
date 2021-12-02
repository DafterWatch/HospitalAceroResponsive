import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDetailsService } from 'src/app/services/area-details.service';
import { CitasDetailsService, CitaRegistro, VerificarReserva } from 'src/app/services/citas-details.service';

@Component({
  selector: 'app-confirmar-ficha',
  templateUrl: './confirmar-ficha.component.html',
  styleUrls: ['./confirmar-ficha.component.scss']
})
export class ConfirmarFichaComponent implements OnInit {

  constructor(private areaService:AreaDetailsService, private router:Router, private citaService:CitasDetailsService) { }
  doctoresData:any;
  areaName:string | any= "";
  fecha:any;
  hora:any;
  doctorSeleccionado:string = "";
  idDoctorSeleccionado:string = "";
  nombreUsuario:string|any="";
  ngOnInit(): void {
    let nombre = sessionStorage.getItem('usuarioNombre');
    this.nombreUsuario = nombre;
    this.areaName = sessionStorage.getItem('area');
    this.listarDoctores();
  }
  listarDoctores(){
    this.areaService.getUnAreaName(this.areaName).subscribe(
      res=>{
        this.doctoresData = res
      },
      err=>{
        console.log(err);          
      }
    );
  }
  citaReg:CitaRegistro={
    fecha: '',
    hora:'',
    doctorId: 0,
    pacienteId: 0,
    estado: true
  }
  confirmarCita(){
    if(this.doctorSeleccionado){
      if(this.fecha){
        if(this.hora){
          if(this.hora == "08:00" || this.hora == "08:30" || this.hora == "09:00" || this.hora == "09:30" ||
          this.hora == "10:00" || this.hora == "10:30" || this.hora == "11:00" || this.hora == "11:30" || this.hora == "12:00" || this.hora == "14:00" ||
          this.hora == "14:30" || this.hora == "15:00" || this.hora == "15:30" ||  this.hora == "16:00" || this.hora == "16:30" || this.hora == "17:00" ||
          this.hora == "17:30" || this.hora == "18:00" || this.hora == "18:30" ||  this.hora == "19:00" || this.hora == "19:30" || this.hora == "20:00"){
            this.verificarReservaNueva();
          } else {
            alert("Horario no disponible");
          }      
        } else {
          alert("Tiene que seleccionar una hora");
        }              
      }else{
        alert("Tiene que seleccionar una fecha");
      }
    } else {
      alert("Tiene que seleccionar un medico");
    }
  }
  verifReserva:VerificarReserva = {
    fecha: '',
    hora: ''
  }
  verificarReservaNueva(){
    this.verifReserva.fecha = this.fecha;
    this.verifReserva.hora = this.hora;
    this.citaService.getValidarReserva(this.verifReserva).subscribe(
      res => {
      if(res){
        alert("Fecha no disponible, por favor seleccione otra fecha");
      } else {
        let idpac = sessionStorage.getItem('usuarioId')+"";        
          let iddoc = this.idDoctorSeleccionado;        
          let doctorId = parseInt(iddoc);
          let pacienteId = parseInt(idpac);
          this.citaReg.fecha = this.fecha;
          this.citaReg.hora = this.hora;
          this.citaReg.doctorId = doctorId;
          this.citaReg.pacienteId = pacienteId;
          this.citaReg.estado = true;
          this.citaService.addCitaRegistro(this.citaReg).subscribe();
          alert("Cita Registrada");
          this.router.navigate(['sacarFichas']); 
      }
    },
    err => {
      console.log(err);
    });
  }
  seleccionarMedico(id:any, name:any){
    this.idDoctorSeleccionado = id;
    this.doctorSeleccionado = name;
  }
}
