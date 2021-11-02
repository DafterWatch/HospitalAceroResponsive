import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosDetailsService, UsuarioLogin, UsuarioTipo} from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private serviceLogin:UsuariosDetailsService) { }
  ngOnInit(): void {
  }
  usuarioLogin:UsuarioLogin={
    correousuario:'',
    contrausuario:''
  }
  usuarioTipo:UsuarioTipo|any={
    idusuarios:'',
    nombreusuario:'',
    correousuario:'',
    contrausuario:'',
    categoria:''
  };
  iniciarSesion(){
    if(this.usuarioLogin.correousuario.length > 0 && this.usuarioLogin.contrausuario.length > 0){
      this.serviceLogin.getUsuarioLogin(this.usuarioLogin).subscribe(
        res=>{
          if(res){
            this.usuarioTipo = res
            sessionStorage.setItem('usuarioNombre',this.usuarioTipo.nombreusuario);
            sessionStorage.setItem('usuarioId',this.usuarioTipo.idusuarios);
            if(this.usuarioTipo.categoria=="paciente"){              
              this.router.navigate(['sacarFichas']);          
            } else if(this.usuarioTipo.categoria=="medico"){
              this.router.navigate(['verFichas']);
            }         
          } else {
            alert("Correo o contraseña incorrectos");          
          }
        },
        err=>{
          console.log(err);        
        }
      );
    } else{
      alert("Complete los campos vacios");
    }
  }
}
