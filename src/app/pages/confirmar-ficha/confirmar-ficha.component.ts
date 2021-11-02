import { Component, OnInit } from '@angular/core';
import { DoctoresDetailsService } from 'src/app/services/doctores-details.service';

@Component({
  selector: 'app-confirmar-ficha',
  templateUrl: './confirmar-ficha.component.html',
  styleUrls: ['./confirmar-ficha.component.scss']
})
export class ConfirmarFichaComponent implements OnInit {

  constructor(private service:DoctoresDetailsService) { }
  doctorData:any;
  area:string | any= "";
  fecha:any;
  doctorSeleccionado:string = "";
  ngOnInit(): void {
    this.doctorData = this.service.doctoresDetalles;
    this.area = sessionStorage.getItem('area');    
  }
  confirmarCita(){
    if(this.doctorSeleccionado){
      
    } else {
      alert("Tiene que seleccionar un medico");
    }
    console.log(this.fecha);
  }
  seleccionarMedico(id:any, name:any){
    this.doctorSeleccionado = name;
  }
}
