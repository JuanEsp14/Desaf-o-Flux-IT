import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Artista } from '../../clases/artista';
import { Album } from '../../clases/album';
import { SpotifyFunciones } from '../../funciones/spotify.funciones';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'detalles',
  templateUrl: 'detalles.component.html',
  providers:[SpotifyFunciones]
})

export class DetallesComponent implements OnInit {
  id:string;
  artista: Artista;
  albums: Album[];
  constructor(private _spotifyFunciones: SpotifyFunciones,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyFunciones.getArtist(id)
          .subscribe(art =>{
            this.artista = art
          })
      })
      this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._spotifyFunciones.getAlbums(id)
            .subscribe(alb => {
              this.albums = alb.items)
            })
        })
  }
}
