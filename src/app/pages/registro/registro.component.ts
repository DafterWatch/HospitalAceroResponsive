import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  user = '';
  pass = '';
  reppass = '';
  mail = '';
  registrarNuevoUsuario(){    
    if(this.user.length>0 && this.pass.length>0 && this.reppass.length>0 && this.mail.length>0){
      if(this.pass == this.reppass){  
        sessionStorage.setItem('correo', this.mail);
        sessionStorage.setItem('contrasena', this.pass);
        alert("Se ha registrado un nuevo usuario");
        this.router.navigate(['login']);
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Porfavor complete los campos vacios");
    }
  }
}
