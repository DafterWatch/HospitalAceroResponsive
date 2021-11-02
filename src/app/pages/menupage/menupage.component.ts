import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctoresDetailsService } from 'src/app/services/doctores-details.service';
import { UsuariosDetailsService, UsuarioLogin, UsuarioTipo} from 'src/app/services/usuarios-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, 
    private doctorService:DoctoresDetailsService, 
    private serviceLogin:UsuariosDetailsService, 
    public router: Router) { }  
  menuData:any;
  ngOnInit(): void {
    const id_entrada = <string>this.param.snapshot.params.id;
    console.log("id "+id_entrada);
    if(id_entrada){
      this.doctorService.getUnDoctor(id_entrada).subscribe(
        res=>{
          this.menuData = res
        },
        err=>{
          console.log(err);          
        }
      );
    }
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
