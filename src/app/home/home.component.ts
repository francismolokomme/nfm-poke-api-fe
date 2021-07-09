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

  gotoItems(index) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.pokemons[index].name,
        weight: this.pokemons[index].weight,
        height: this.pokemons[index].height,
        image: this.pokemons[index].sprites.other.dream_world.front_default,
        base_experience: this.pokemons[index].base_experience,
        ability:
          this.pokemons[index].abilities[0].is_hidden === false
            ? this.pokemons[index].abilities[0].ability.name
            : this.pokemons[index].abilities[1].ability.name,
      },
    };
    this._router.navigate(['/pokemon-details'], {
      state: { pokemonsdetails: navigationExtras },
    });
  }
}
