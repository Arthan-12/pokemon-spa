import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, first } from 'rxjs';
import { Pokemon } from 'src/app/api/models/pokemon-response';
import { PokemonApiService } from 'src/app/api/services/pokemon-api.service';

@Injectable({
  providedIn: 'root',
})
export class PokedexStoreService {
  private pokemonSubject: BehaviorSubject<Pokemon>;
  private loadingSubject: BehaviorSubject<boolean>;

  constructor(private pokemonService: PokemonApiService) {
    this.pokemonSubject = new BehaviorSubject<Pokemon>({});
    this.loadingSubject = new BehaviorSubject<boolean>(false);
  }

  get pokemon$() {
    return this.pokemonSubject.asObservable();
  }

  get loadingState$() {
    return this.loadingSubject.asObservable();
  }

  setPokemon(pokemon: Pokemon) {
    this.pokemonSubject.next(pokemon);
  }

  findPokemonByName(pokemonName: string) {
    this.loadingSubject.next(true);
    this.pokemonService
      .findByName(pokemonName)
      .pipe(
        first(),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe({
        next: (response) => this.setPokemon(response),
        error: (error) => {
          if (error.status === 404) {
            this.setPokemon({});
          }
        },
      });
  }
}
