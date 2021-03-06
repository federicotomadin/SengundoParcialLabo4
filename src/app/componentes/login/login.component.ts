import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../clases/Usuario';
import { auth } from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recordarme = false;
  usuario: Usuario;
  captchaLogin = 'lleno';
  vCardData = 'codigo qr vacio';
  authError: any;
  logueado: string;

  constructor(private authUser: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new Usuario();

    if (localStorage.getItem('email')) {
      // this.captchaLogin = 'vacio';
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
    this.authUser.eventAuthErrors.subscribe( data => {
    this.authError = data;
      });
  }


  // ReconociendoCaptcha(cap: string) {
  //   this.captchaLogin = cap;
  // }

  Login(form: NgForm) {

    if (form.invalid) { return; }
    if (this.captchaLogin === 'vacio') {

  setTimeout(function() {
    Swal.fire({
    allowOutsideClick: false,
    icon: 'error',
    text: 'Captcha no validado',
  });
 }, 200);
  Swal.close();
  this.router.navigate(['/Login']);
  return;
}

  Swal.fire({
 allowOutsideClick: false,
 icon: 'info',
 text: 'Ingresando...',
 timer: 2000
});
    Swal.showLoading();

    this.authUser.Login(form.value);

    if (this.recordarme = true) {
    localStorage.setItem('email', this.usuario.email);
  }
    Swal.close();
}

ngSubmit(form: NgForm) {

this.Login(form);

}

}
