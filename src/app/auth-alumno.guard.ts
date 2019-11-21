import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './servicios/auth.service';
import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from './servicios/usuarios.service';
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from 'sweetalert2';
import { Usuario } from "./clases/Usuario";
import { analytics } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthAlumnoGuard implements CanActivate {

  constructor(private auth: AuthService, private userServicie: UsuariosService,
    private router: Router,  private afAuth: AngularFireAuth, private db: AngularFireDatabase ) { 
    }

    bandera = true;
    uid: string;
    algo: any;
    canActivate(): boolean {
       this.auth.getCurrentUser()
      .subscribe(resp => 
        this.uid = resp.uid
        );
  
    
      this.db.list<Usuario>('/Usuario').valueChanges()
      .subscribe(resp => 
        resp.forEach(element => {
          if (this.uid == element.uid) {
  
            if (element.tipoUsuario == 'Administrador') {
              this.bandera = true;
            }
  
            if (element.tipoUsuario == 'Profesor') {           
              this.bandera = false;
              Swal.fire({
                allowOutsideClick: false,
                icon: 'error',
                text: 'Permisos insuficientes',
                timer: 2000
               });
              this.router.navigate(['/Login']);
              }
  
            if (element.tipoUsuario == 'Alumno') {
              this.bandera = true;
            }
          }
        
        })
      )
      return this.bandera;
  }
  }
  