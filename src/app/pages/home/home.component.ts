import { Component, OnInit } from '@angular/core';
import { DoctoresDetailsService, DoctoresLista } from 'src/app/services/doctores-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private doctorService:DoctoresDetailsService) { }
  doctoresData:DoctoresLista[] = [];
  ngOnInit(): void {
    this.listarDoctores();
  }
  listarDoctores(){
    this.doctorService.getDoctoresLista().subscribe(
      res => {
        this.doctoresData=<any>res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
