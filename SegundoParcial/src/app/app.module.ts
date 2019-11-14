import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { MateriaComponent } from './componentes/materia/materia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    AlumnoComponent,
    ProfesorComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
