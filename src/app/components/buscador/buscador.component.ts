import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyFunciones } from '../../funciones/spotify.funciones';
import { Artista } from '../../clases/artista'
import { Album } from '../../clases/album'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'buscador',
  templateUrl: 'buscador.component.html',
  providers:[SpotifyFunciones]
})
export class BuscadorComponent implements OnInit {

  title = 'Buscador';
  searchStr : string;
  searchType : string;
  searchMarcket: string;
  searchLimit: string;
  searchOffset: string;
  resArtits: Artista[];
  resAlbum: Album[];
  ok : boolean;


  constructor(private _spotifyFunciones: SpotifyFunciones) { }

  ngOnInit() {
  }

 searchMusic(){
   if (this.searchType == "artist"){
      this._spotifyFunciones.searchMusic(this.searchStr,
                                        this.searchType,
                                        this.searchLimit,
                                        this.searchOffset
                                        )
        .subscribe(respuesta => {
          this.resArtits = respuesta.artists.items;
        })
    }
    if (this.searchType == "album"){
       this._spotifyFunciones.searchMusic(this.searchStr,
                                         this.searchType,
                                         this.searchLimit,
                                         this.searchOffset
                                         )
         .subscribe(respuesta => {
           this.resAlbum = respuesta.albums.items;
         })
     }
   }
  }
