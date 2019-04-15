import { Component, OnInit } from '@angular/core';
import { Mascota } from '../modelos/mascota';
import { MascotasService } from '../services/mascotas.service';
import { LikedService } from '../services/liked.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

  mascota: Mascota = null;
  isLiked: boolean=false;


  constructor(
    private _mascServ: MascotasService,
    private _likedServ: LikedService,
  ) { }

  ngOnInit() {
    this._mascServ.getMascota().subscribe(laMascota => {
      this.mascota = laMascota;
      if(this.mascota) this._likedServ.isLiked(this.mascota.id).subscribe(liked=>{
        this.isLiked=liked;
      })
    });
    
  }

  dameSiguiente() {
    this._mascServ.siguiente();
  }

  dameAnterior() {
    this._mascServ.anterior();
  }

  like() {
    this._likedServ.addLike(this.mascota.id);
  }

}
