import { Component, OnInit } from '@angular/core';
import { Login } from '../modelos/login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  login = new Login(null, null);
  mensaje_error = '';

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loguear() {
    console.log('loguear:', this.login);
    this._auth.login(this.login).subscribe(
      data => {
        if (data.token) this._router.navigate(['/candidatos']);
      },
      error=>{
        this.mensaje_error='El email o contraseña no son correctas';
      }
    );
  }

}
