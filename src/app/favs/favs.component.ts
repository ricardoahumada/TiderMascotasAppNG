import { Component, OnInit } from '@angular/core';
import { Mascota } from '../modelos/mascota';
import { MascotasService } from '../services/mascotas.service';
import { LikedService } from '../services/liked.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  favs:Mascota[]=null;

  constructor(
    private _mascServ:MascotasService,
    private _likedServ: LikedService
  ) { }

  ngOnInit() {
    this.favs=this._mascServ.getMascotasForFavs(this._likedServ.getLiked());
  }

}
