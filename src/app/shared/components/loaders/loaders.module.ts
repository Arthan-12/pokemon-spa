import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeballLoaderComponent } from './pokeball-loader/pokeball-loader.component';

@NgModule({
  declarations: [PokeballLoaderComponent],
  imports: [CommonModule],
  exports: [PokeballLoaderComponent],
})
export class LoadersModule {}
