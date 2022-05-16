import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokedex',
    loadChildren: () =>
      import('../app/modules/pokedex/pokedex.module').then(
        (m) => m.PokedexModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
