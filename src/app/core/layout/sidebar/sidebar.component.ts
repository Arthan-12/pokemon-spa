import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links = ['home', 'pokedex'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(link: string) {
    this.router.navigate(['/', link]);
  }
}
