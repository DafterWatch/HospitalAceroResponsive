import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaDetailsService } from 'src/app/services/area-details.service';
import { CitasDetailsService, CitaRegistro } from 'src/app/services/citas-details.service';

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
  seleccionarMedico(id:any, name:any){
    this.idDoctorSeleccionado = id;
    this.doctorSeleccionado = name;
  }
}
