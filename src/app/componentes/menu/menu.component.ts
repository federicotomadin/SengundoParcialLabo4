import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public email: string;

  constructor(private authUser: AuthService, private router: Router, private afAuth: AngularFireAuth) {
   this.email = this.afAuth.auth.currentUser.email;
   }

  ngOnInit() {
  }

  SalirDeLaSesion() {
    this.authUser.Logout();
    this.router.navigate(['/Login']);
  }

}
