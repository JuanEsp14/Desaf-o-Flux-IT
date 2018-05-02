import { Artista } from './artista';
import { Image } from './image';

export class Album{
  id: string;
  name: string;
  images: Image[];
  album_type: string;
  artists: Artista[];
}
