import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationStart,
  NavigationExtras,
  Router,
} from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons = [];
  pokemonSearch: string;

  constructor(private _apiService: ApiService, private _router: Router) {}

  ngOnInit(): void {
    this._apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.pokemons = data;
    });
    console.log(this.pokemons);
  }

  gotoItems(pokemon) {
    console.log(pokemon);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        image: pokemon.sprites.other.dream_world.front_default,
        base_experience: pokemon.base_experience,
        ability:
        pokemon.abilities[0].is_hidden === false
            ? pokemon.abilities[0].ability.name
            : pokemon.abilities[1].ability.name,
      },
    };
    this._router.navigate(['/pokemon-details'], {
      state: { pokemonsdetails: navigationExtras },
    });
  }
}
