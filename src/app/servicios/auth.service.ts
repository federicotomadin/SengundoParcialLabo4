import { Injectable, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

email: string;
nuevoUsuario: any;
@Input() logueado: boolean;
error: string;

public eventAuthError = new BehaviorSubject<string>('');
public eventAuthErrors = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) {
   }


CrearUsuario(user) {
   this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  .then( credenciales => {
    this.nuevoUsuario = user;

    credenciales.user.updateProfile({
      displayName: user.email
    });

  });
}

Login(email: string, password: string) {
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
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
    this.router.navigate(['/Materia']);
  }
  });

  }


Logout() {
  return this.afAuth.auth.signOut();
}



}
