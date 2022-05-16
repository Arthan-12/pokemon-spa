import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Pokemon } from 'src/app/api/models/pokemon-response';
import { PokedexStoreService } from '../../stores/pokedex-store.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
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
        }
        //  else {
        //   this.searchPokemonInput.setErrors({ notFound: true });
        //   console.log('error');
        // }
      }
    });
  }
}
