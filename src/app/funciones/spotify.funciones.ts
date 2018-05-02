import { Injectable } from '@angular/core'
import {Http, Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()

export class SpotifyFunciones{
  private searchUrl: string;
  private accessToken:string = "BQBKPpukB7XqblqOhl3uKnTfQcZFJ50t-qE2Z5eTjAXTVAzQC2M3NNFHzQFk1Z2OESZmIiBPtJifAGayljswl9GkN7sVow1qCp0elwVzGtyY9Hy-PvZ2mG-Bp0Z1A4-xT0XukBU60cS01N8tTuZR60TmqcJTW2xdgpw3NzSPP4NZ";
  private   IDs = ["0oSGxfWSnnOXhD2fKuz2Gy",
                  "22bE4uQ6baNwSHPVcDxLCe",
                  "3WrFJ7ztbogyGnTHbHJFl2",
                  "1dfeR4HaWDbWqFHLkxsg1d"
                ];


  constructor(private _http: Http){
  }

  searchMusic(str:string, type:string, limit:string, offset:string){
    const BASE_URL = 'https://api.spotify.com/v1/search?q=';
    this.searchUrl = BASE_URL+str+'&type='+type+'&market=US'+'&limit='+limit+'&offset='+offset;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);

      return this._http.get(this.searchUrl, {headers : headers})
        .map(respuesta => respuesta.json());

  }

  getArtists(){
    const BASE_URL = 'https://api.spotify.com/v1/artists?ids=';
    this.searchUrl = BASE_URL+this.IDs[0]+"%2C"+this.IDs[1]+"%2C"+this.IDs[2]+"%2C"+this.IDs[3];

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);

      return this._http.get(this.searchUrl, {headers : headers})
        .map(respuesta => respuesta.json());

  }

  getArtist(id:string){
    const BASE_URL = 'https://api.spotify.com/v1/artists/';
    this.searchUrl = BASE_URL+id;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);

      return this._http.get(this.searchUrl, {headers : headers})
        .map(respuesta => respuesta.json());

  }

  getAlbums(id:string){
    const BASE_URL = 'https://api.spotify.com/v1/artists/';
    this.searchUrl = BASE_URL+id+"/albums";

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.accessToken);

      return this._http.get(this.searchUrl, {headers : headers})
        .map(respuesta => respuesta.json());

  }
}
