import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(login: any) {
    return this._http.post<any>('http://localhost:8080/api/auth', login).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
       })
    );
  }

  isSignedIn() {
    return localStorage.getItem('token');
  }
}
