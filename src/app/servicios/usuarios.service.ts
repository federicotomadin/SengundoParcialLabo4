import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Alumno } from '../clases/Alumno';
import { Profesor } from '../clases/Profesor';
import { Administrador } from '../clases/Administrador';


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

  createAlumno(alumno: Alumno): void {
    this.RefAlumno.push(alumno);
  }

  createProfesor(profesor: Profesor): void {
    this.RefProfesor.push(profesor);
  }

  createAdministraor(administraor: Administrador): void {
    this.RefAdministrador.push(administraor);
  }
}
