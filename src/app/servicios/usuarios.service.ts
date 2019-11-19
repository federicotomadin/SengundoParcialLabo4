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

  private dbPathAlumno = '/Alumno';
  private dbPathProfesor = '/Profesor';
  private dbPathAdministrador = '/Administrador';

  RefAlumno: AngularFireList<Alumno> = null;
  RefProfesor: AngularFireList<Profesor> = null;
  RefAdministrador: AngularFireList<Administrador> = null;

  constructor(private db: AngularFireDatabase) {
    this.RefAlumno = db.list(this.dbPathAlumno);
    this.RefProfesor = db.list(this.dbPathProfesor);
    this.RefAdministrador = db.list(this.dbPathAdministrador);
  }


  getAlumno() {
    return this.RefAlumno = this.db.list('alumno');
  }

  createAlumno(usuario: Usuario): void {
    const alumno = new Alumno();
    if (usuario.tipoUsuario === 'Alumno') {
   alumno.email = usuario.email;
   alumno.password = usuario.password;
   }
    this.RefAlumno.push(alumno);

  }

  createUsuario(user: Usuario): void {
    if (user.tipoUsuario === '0') {
      const administrador = new Administrador();
      administrador.email = user.email;
      administrador.password = user.password;
      administrador.tipoUsuario = user.tipoUsuario;
      this.RefAdministrador.push(administrador);
    }
    if (user.tipoUsuario === '1') {
      const profesor = new Profesor();
      profesor.email = user.email;
      profesor.password = user.password;
      profesor.tipoUsuario = user.tipoUsuario;
      this.RefProfesor.push(profesor);
    }
    if (user.tipoUsuario === '2') {
      const alumno = new Alumno();
      alumno.email = user.email;
      alumno.password = user.password;
      alumno.tipoUsuario = user.tipoUsuario;
      this.RefAlumno.push(alumno);
    }
  }

  createAdministraor(administraor: Administrador): void {
    this.RefAdministrador.push(administraor);
  }
}
