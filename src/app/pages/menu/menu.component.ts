import { Component, OnInit } from '@angular/core';
import { DoctoresDetailsService } from 'src/app/services/doctores-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service:DoctoresDetailsService) { }
  doctorData:any;
  ngOnInit(): void {
    this.doctorData = this.service.doctoresDetalles;
  }

}
