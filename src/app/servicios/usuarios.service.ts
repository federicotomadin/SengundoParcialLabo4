import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Alumno } from '../clases/Alumno';
import { Profesor } from '../clases/Profesor';
import { Administrador } from '../clases/Administrador';
import { Usuario } from '../clases/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dbPathUsuario = '/Usuario';

  RefUsuario: AngularFireList<Usuario> = null;

  constructor(private db: AngularFireDatabase) {
    this.RefUsuario = db.list(this.dbPathUsuario);
  }


  getUsuario() {
    return this.RefUsuario = this.db.list('usuario');
  }

  createUsuario(user: Usuario, uid: string): void {
    if (user.tipoUsuario === '0') {
      const usuario = new Usuario();
      usuario.email = user.email;
      usuario.password = user.password;
      usuario.tipoUsuario = 'Administrador';
      usuario.uid = uid;
      this.RefUsuario.push(usuario);
    }
    if (user.tipoUsuario === '1') {
      const usuario = new Usuario();
      usuario.email = user.email;
      usuario.password = user.password;
      usuario.tipoUsuario = 'Profesor';
      usuario.uid = uid;
      this.RefUsuario.push(usuario);
    }
    if (user.tipoUsuario === '2') {
      const usuario = new Usuario();
      usuario.email = user.email;
      usuario.password = user.password;
      usuario.tipoUsuario = 'Alumno';
      usuario.uid = uid;
      this.RefUsuario.push(usuario);
    }
  }

}
