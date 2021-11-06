import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VerFichasComponent } from './pages/ver-fichas/ver-fichas.component';
import { SacarFichasComponent } from './pages/sacar-fichas/sacar-fichas.component';
import { FormsModule } from '@angular/forms';
import { ConfirmarFichaComponent } from './pages/confirmar-ficha/confirmar-ficha.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { ListaCitasComponent } from './pages/lista-citas/lista-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    LoginComponent,
    RegistroComponent,
    VerFichasComponent,
    SacarFichasComponent,
    ConfirmarFichaComponent,
    RegistroPacienteComponent,
    ListaCitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
