import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MateriaComponent } from './componentes/materia/materia.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AuthGuard } from './auth.guard';


// import { PrincipalComponent } from '../componentes/principal/principal.component';
// import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
// import { MenuComponent } from '../componentes/menu/menu.component';
// import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
// import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
// import { ListadoComponent } from '../componentes/listado/listado.component'
// import { ListadosComponent } from '../componentes/listados/listados.component';
// import { JuegosComponent } from '../componentes/juegos/juegos.component';
// import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
// import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
// import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
// import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
// import { CrucigramaDigitalComponent } from '../componentes/crucigrama-digital/crucigrama-digital.component';
// import { AuthGuard } from '../auth.guard';


const MiRuteo = [
  {path: '' , component: LoginComponent},
  {path: 'Login' , component: LoginComponent},
  {path: 'Registro' , component: RegistroComponent},
  {path: 'Administrador' , component: AdministradorComponent},
  {path: 'Profesor' , component: ProfesorComponent},
  {path: 'Materia' , component: MateriaComponent},
  {path: 'Alumno' , component: AlumnoComponent},

  // , canActivate: [ AuthGuard ]
  
  // { path: 'Juegos' , component: JuegosComponent,
  // children:
  //      [{path: '' , component: MenuCardComponent},
  //      {path: 'Adivina' , component: AdivinaMasListadoComponent, canActivate: [ AuthGuard ]},
  //       {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent, canActivate: [ AuthGuard ]},
  //       {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent, canActivate: [ AuthGuard ]},
  //       {path: 'Agilidad' , component: AgilidadMasListadoComponent, canActivate: [ AuthGuard ]},
  //       {path: 'CrucigramaDigital' , component: CrucigramaDigitalComponent, canActivate: [ AuthGuard ]}],
  // },
  {path: '**' , component: ErrorComponent},
  {path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(MiRuteo)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
