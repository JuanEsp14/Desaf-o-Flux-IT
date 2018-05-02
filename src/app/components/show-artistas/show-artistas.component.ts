import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyFunciones } from '../../funciones/spotify.funciones';
import { Artista } from '../../clases/artista';

@Component({
  selector: 'show-artistas',
  templateUrl: 'show-artistas.component.html',
  providers:[SpotifyFunciones]
})
export class ShowArtistasComponent implements OnInit {
  artistas: Artista[];
  artista: Artista;
  searchId: string;
  imprimir: string;
  JSONres: JSON;


  constructor(private _spotifyFunciones: SpotifyFunciones) { }

  ngOnInit() {
    this.setArtist();
  }

  setArtist(){
    this._spotifyFunciones.getArtists()
      .subscribe(respuesta => {
        this.artistas = respuesta.artists;
      })
   }

    generos(id: number) {
      this.imprimir = this.artistas[id].genres[0]
      for(var i = 1; i < this.artistas[id].genres.length; i++){
        this.imprimir = this.imprimir+", "+this.artistas[id].genres[i]
      }
   }

   response(id: number) {
      this._spotifyFunciones.getArtist(
        this.artistas[id].id
      ).subscribe(respuesta => {
        this.JSONres = JSON.stringify(respuesta, null, 4)
      })
  }

}
