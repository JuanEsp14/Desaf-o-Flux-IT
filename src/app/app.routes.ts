import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ShowArtistasComponent } from './components/show-artistas/show-artistas.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  { path: 'buscador', component: BuscadorComponent},
  { path: '', component: ShowArtistasComponent},
  { path: 'detalles/:id', component: DetallesComponent}

];

@NgModule({
  imports: [CommonModule,
            RouterModule.forRoot(routes)
          ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutesModule { }
