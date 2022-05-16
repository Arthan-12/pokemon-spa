import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokedexStoreService } from '../stores/pokedex-store.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
})
export class PokedexPageComponent implements OnInit, OnDestroy {
  loadingStatus = false;
  notFoundPokemon = false;
  searchTriggered = false;
  subscriptions: Subscription[] = [];

  constructor(private pokedexStore: PokedexStoreService) {}

  ngOnInit(): void {
    this.getLoadingStatus();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getLoadingStatus() {
    this.subscriptions.push(
      this.pokedexStore.loadingState$.subscribe((status) => {
        this.loadingStatus = status;
      })
    );
  }

  setSearchTriggered(searchTriggered: boolean) {
    this.searchTriggered = searchTriggered;
  }

  setNotFoundDisplay(noPokemon: boolean) {
    if (noPokemon && this.searchTriggered) {
      this.notFoundPokemon = true;
    } else {
      this.notFoundPokemon = false;
    }
  }
}
