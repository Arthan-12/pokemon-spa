import { NgModule } from '@angular/core';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PokedexPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
