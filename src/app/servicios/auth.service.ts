import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../clases/Usuario';
import { UsuariosService } from './usuarios.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

email: string;
nuevoUsuario: any;
error: string;
@Output() logueado = new EventEmitter<string>();

public eventAuthError = new BehaviorSubject<boolean>(true);
public eventAuthErrors = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private dbBase: AngularFireDatabase,
    private router: Router,
    private usuarioService: UsuariosService) {
   }

FuncionLoguear(log?: string) {
  return this.logueado.emit(log);
}

CrearUsuario(user: Usuario) {
   this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  .then( resp => {
    this.usuarioService.createUsuario(user, resp.user.uid);
  });
}

 Login(user: Usuario) {

  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  .catch(error => {
    this.eventAuthError.next(error);
    Swal.fire({
      allowOutsideClick: false,
      icon: 'error',
      text: 'Credenciales Incorrectas',
      timer: 2000
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
