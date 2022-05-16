import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokeball-loader',
  templateUrl: './pokeball-loader.component.html',
  styleUrls: ['./pokeball-loader.component.scss'],
})
export class PokeballLoaderComponent implements OnInit {
  @Input() size: 'small' | 'medium' = 'small';

  constructor() {}

  ngOnInit(): void {}
}
