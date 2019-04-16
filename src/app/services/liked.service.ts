import { Injectable } from '@angular/core';
import { Mascota } from '../modelos/mascota';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  private _liked: number[] = [];
  private $likedObserver = new BehaviorSubject(false);
  private _likedObservable;

  constructor() { }

  addLike(mid: number) {
    if (!this._liked.includes(mid)) {
      this._liked.push(mid);
      this.$likedObserver.next(true);
    }
  }

  isLiked(mid): Observable<boolean> {
    this._likedObservable = this.$likedObserver.asObservable();
    this.$likedObserver.next(this._liked.includes(mid));
    return this._likedObservable;
  }

  getLiked(){
    return this._liked;
  }
}
