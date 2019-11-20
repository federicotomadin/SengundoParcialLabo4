import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './servicios/auth.service';
import { Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from './servicios/usuarios.service';
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userServicie: UsuariosService,
              private router: Router,  private afAuth: AngularFireAuth, private db: AngularFireDatabase ) {}

  private uid;

  canActivate(): boolean {
    this.afAuth.auth.onAuthStateChanged( user => {
      this.uid = user.uid;
    });

    this.db.list('/Usuario').valueChanges()
      .forEach( element => {

        if (element.uid === this.uid) {

          if (element.tipoUsuario === 'Administrador') {

            return true;
          }

          if (element.tipoUsuario === 'Profesor') {
              Swal.fire({
                allowOutsideClick: false,
                icon: 'error',
                text: 'Credenciales Incorrectas',
                timer: 1000
               });
              this.router.navigate(['/Login']);
            }

          if (element.tipoUsuario === 'Alumno') {
              Swal.fire({
                allowOutsideClick: false,
                icon: 'error',
                text: 'Credenciales Incorrectas',
                timer: 1000
               });
              this.router.navigate(['/Login']);
            }
          }
      });
    return true;
    }

}

