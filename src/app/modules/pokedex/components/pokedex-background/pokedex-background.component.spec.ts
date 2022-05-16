import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBackgroundComponent } from './pokedex-background.component';

describe('PokedexBackgroundComponent', () => {
  let component: PokedexBackgroundComponent;
  let fixture: ComponentFixture<PokedexBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
