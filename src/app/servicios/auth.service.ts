import { Injectable, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


email: string;
nuevoUsuario: any;
@Input() logueado: boolean;
error: string;

public eventAuthError = new BehaviorSubject<boolean>(true);
public eventAuthErrors = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {
   }

RetornarEmail() {
  return this.email;
}


CrearUsuario(user: Usuario) {
   this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  .then( credenciales => {
    this.nuevoUsuario = user;

    credenciales.user.updateProfile({
      displayName: user.email
    });

  });
}

 Login(user: Usuario) {

  this.afAuth.auth.signInWithCredential(function(cre) {
       if (userCredential) {

       }

  });

  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  .catch(error => {
    this.eventAuthError.next(error);
    Swal.fire({
      allowOutsideClick: false,
      icon: 'error',
      text: 'Credenciales Incorrectas'
     });

  })
  .then(userCredential => {
    if (userCredential) {
    this.router.navigate(['/Administrador']);
  }
  });

  }


Logout() {
  this.eventAuthError.next(false);
  return this.afAuth.auth.signOut();
}



}
