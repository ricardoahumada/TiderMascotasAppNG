import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../modelos/mascota';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private _mascotas = null;
  private $mascotasObserver = new BehaviorSubject(this._mascotas);
  private _mascotaObservable;

  private actual: number = 0;

  constructor(private _http: HttpClient) { }

  getMascotas(): Observable<Mascota[]> {
    if (this._mascotas) {
      return of(this._mascotas);
    } else {
      return this._http.get<Mascota[]>('http://www.mocky.io/v2/5ca792c1520000b30b97b63e').pipe(
        tap(data => {
          this._mascotas = data;
        })
      );
    }

  }

  getMascota(): Observable<Mascota> {

    if (!this._mascotaObservable) this._mascotaObservable = this.$mascotasObserver.asObservable();

    this.getMascotas().subscribe(
      data => {
        localStorage.setItem('mascotas', JSON.stringify(this._mascotas));
        this.$mascotasObserver.next(this._mascotas[this.actual]);
      },
      error => {
        this._mascotas = JSON.parse(localStorage.getItem('mascotas'));
        this.$mascotasObserver.next(this._mascotas[this.actual]);
      }
    );

    return this._mascotaObservable;
  }

  getMascotasForFavs(favs: number[]) {
    if (this._mascotas) return this._mascotas.filter(
      aM => favs.includes(aM.id)
    );
    else return null;
  }

  siguiente() {
    if (this.actual === this._mascotas.length - 1) this.actual = 0;
    else this.actual++;
    this.getMascota().subscribe();
  }

  anterior() {
    if (this.actual === 0) this.actual = this._mascotas.length - 1;
    else this.actual--;
    this.getMascota().subscribe();
  }

}
