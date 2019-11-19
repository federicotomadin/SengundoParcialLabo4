import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Materia } from 'src/app/clases/Materia';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  private dbPathMateria = '/Materia';

  RefMateria: AngularFireList<Materia> = null;

  constructor(private db: AngularFireDatabase) {
    this.RefMateria = db.list(this.dbPathMateria);

   }

  ngOnInit() {
  }

  getMateria() {
    return this.RefMateria = this.db.list('materia');
  }

  createMateria(materia: Materia): void {
    this.RefMateria.push(materia);
  }


}
