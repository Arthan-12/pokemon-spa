import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/api/models/pokemon-response';
import { PokedexStoreService } from '../../stores/pokedex-store.service';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.scss'],
})
export class PokemonDisplayComponent implements OnInit {
  @Output() notFoundPokemon = new EventEmitter<boolean>();
  pokemon: Pokemon = {};

  constructor(private pokedexStore: PokedexStoreService) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokedexStore.pokemon$.subscribe((pokemon) => {
      if (pokemon) {
        if (pokemon.id) {
          this.pokemon = pokemon;
          console.log(this.pokemon);
          this.notFoundPokemon.emit(false);
        } else {
          this.notFoundPokemon.emit(true);
        }
      }
    });
  }
}
