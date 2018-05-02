import { Album } from'./album';
import { Image } from'./image';

export class Artista{

  name: string;
  followers:number;
  popularity:number;
  genres: string[];
  images: Image[];
  albums: Album[];

  constructor(
    public id: string
  ){ }


}
