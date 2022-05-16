import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/shared/components/icons/icons.module';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { PokedexBackgroundComponent } from './components/pokedex-background/pokedex-background.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonDisplayComponent } from './components/pokemon-display/pokemon-display.component';
import { LoadersModule } from 'src/app/shared/components/loaders/loaders.module';

@NgModule({
  declarations: [
    PokedexPageComponent,
    SearchPokemonComponent,
    PokedexBackgroundComponent,
    PokemonInfoComponent,
    PokemonDisplayComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    IconsModule,
    LoadersModule,
  ],
  exports: [
    PokedexPageComponent,
    SearchPokemonComponent,
    PokedexBackgroundComponent,
    PokemonInfoComponent,
    PokemonDisplayComponent,
  ],
})
export class PokedexModule {}
