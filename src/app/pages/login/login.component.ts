import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }
  correoSession:any="";
  contraSession:any="";
  ngOnInit(): void {
    this.correoSession = sessionStorage.getItem('correo');
    this.contraSession = sessionStorage.getItem('contrasena');
  }
  mail = '';
  pass = '';
  iniciarSesion(){
    if(this.mail.length > 0 && this.pass.length > 0){
      if(this.mail == "medico"){
        sessionStorage.setItem("usuario","Dr. Carioca");
        this.router.navigate(['verFichas']);
      } else if(this.mail == this.correoSession && this.pass == this.contraSession){
        sessionStorage.setItem("usuario","Juan");
        this.router.navigate(['sacarFichas']);
      } else {
        alert("Esta cuenta no existe");
      }
    } else {
      alert("Complete los datos");
    }
  }
}
