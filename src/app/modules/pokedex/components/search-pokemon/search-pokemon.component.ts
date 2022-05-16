import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/api/models/pokemon-response';
import { PokedexStoreService } from '../../stores/pokedex-store.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss'],
})
export class SearchPokemonComponent implements OnInit {
  @Output() searchTriggered = new EventEmitter<boolean>();
  searchPokemonInput: FormControl = new FormControl();
  buttonTitle = 'Buscar Pokémon!';
  errorMessage = 'Pokémon não encontrado!';

  constructor(private pokedexStore: PokedexStoreService) {}

  ngOnInit(): void {}

  searchPokemon() {
    const pokemonName = this.searchPokemonInput.value;
    this.pokedexStore.findPokemonByName(pokemonName);
    this.searchTriggered.emit(true);
  }
}
