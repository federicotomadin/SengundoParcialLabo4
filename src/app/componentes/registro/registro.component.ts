import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { FirebaseStorageService } from '../../servicios/firebase-storage.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/Usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  urlPublica: string;

  constructor(private authUser: AuthService, private router: Router,
              private serviceFireStorage: FirebaseStorageService,
              private usuarioService: UsuariosService) {

   }

  ngOnInit() {
    this.usuario = new Usuario();
  }

ngSubmit(form: NgForm) {

  if (form.invalid) { return; }

  Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Se ha registrado con exito...',
      timer: 1500
    });
    // Swal.showLoading();
  this.authUser.CrearUsuario(form.value);
  this.router.navigate(['/Login']);

  }

  public onFileSelectd($event) {

    if ($event.target.files.length === 1) {
      this.serviceFireStorage.referenciaCloudStorage($event.target.files[0].name).getDownloadURL()
       .subscribe(resp  => {
         this.urlPublica = resp;

         Swal.fire({
          allowOutsideClick: false,
          type: 'info',
          text: 'Imagen cargada con exito'
});
      }, (error) => {
        console.error(error);
      });

      this.serviceFireStorage.tareaCloudStorage($event.target.files[0].name, $event.target.files[0]);
   }

}
}
