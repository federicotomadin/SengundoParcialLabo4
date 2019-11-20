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
    .subscribe( usuario => {
      if (usuario[0].uid == this.uid) {
        if (usuario[0].tipoUsuario == 'Administrador') {
             return true;
        }
        if (usuario[0].tipoUsuario == 'Profesor') {
          Swal.fire({
            allowOutsideClick: false,
            icon: 'error',
            text: 'Credenciales Incorrectas',
            timer: 1000
           });
          this.router.navigate(['/Login']);
        }
        if (usuario[0].tipoUsuario == 'Alumno') {
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
