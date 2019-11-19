import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseStorageService } from './servicios/firebase-storage.service';
import { AngularFireStorageModule } from '@angular/fire/storage';



//Servicios
import { MateriasService } from './servicios/materias.service';
import { UsuariosService } from './servicios/usuarios.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { MateriaComponent } from './componentes/materia/materia.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AuthService } from './servicios/auth.service';
import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';
import { MiCaptchaComponent } from './utils/mi-captcha/mi-captcha.component';
import { QRCodeModule } from 'angular2-qrcode';
import { UtilsModule } from './utils/utils';
import { MenuComponent } from './componentes/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    AlumnoComponent,
    ProfesorComponent,
    MateriaComponent,
    ErrorComponent,
    MenuComponent
     ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    QRCodeModule,
    UtilsModule
  ],
  providers: [AuthService, FirebaseStorageService, MateriasService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
