import { Component, OnInit } from '@angular/core';
import { DoctoresDetailsService } from 'src/app/services/doctores-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:DoctoresDetailsService) { }
  doctoresData:any;
  ngOnInit(): void {
    this.doctoresData = this.service.doctoresDetalles;
  }

}
