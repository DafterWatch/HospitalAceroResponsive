import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConfirmarFichaComponent } from './pages/confirmar-ficha/confirmar-ficha.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaCitasComponent } from './pages/lista-citas/lista-citas.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SacarFichasComponent } from './pages/sacar-fichas/sacar-fichas.component';
import { VerFichasComponent } from './pages/ver-fichas/ver-fichas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'verFichas',component:VerFichasComponent},
  {path:'sacarFichas',component:SacarFichasComponent},
  {path:'confirmarFicha',component:ConfirmarFichaComponent},
  {path:'registroPaciente',component:RegistroPacienteComponent},
  {path:'listaCitas',component:ListaCitasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
