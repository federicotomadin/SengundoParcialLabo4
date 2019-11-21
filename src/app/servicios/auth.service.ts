import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable } from 'rxjs';
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
private user: Observable<firebase.User | null >;

public eventAuthError = new BehaviorSubject<boolean>(true);
public eventAuthErrors = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private dbBase: AngularFireDatabase,
    private router: Router,
    private usuarioService: UsuariosService) {

     
    this.user = this.afAuth.authState;
  
   }

FuncionLoguear(log?: string) {
  return this.logueado.emit(log);
}


getCurrentUser(): Observable<firebase.User | null> {
  return this.user;
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
      timer: 3000
     });
  })
  .then(userCredential => {
    if (userCredential) {

  this.router.navigate(['/Profesor']);
 }
});
 }

Logout() {
  this.eventAuthError.next(false);
  return this.afAuth.auth.signOut();
}
}
