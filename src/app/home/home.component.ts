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
  testObj = [
    {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      },
      weight: 69,
      height: 7,
      base_experience: 64,
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    },
    {
      id: 2,
      name: 'ivysaur',
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
      },
      weight: 130,
      height: 10,
      base_experience: 142,
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    },
  ];

  constructor(private _apiService: ApiService, private _router: Router) {}

  ngOnInit(): void {
    // this.pokemons = this.testObj;
    // **** you need to enable this to fetch data from the end point ***
    this._apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.pokemons = data;
    });
    console.log(this.pokemons);
  }

  gotoItems(index) {
    // console.log('this.gotoItems', index);
    // console.log('this.gotoItems', this.pokemons[index]);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: this.pokemons[index].name,
        weight: this.pokemons[index].weight,
        height: this.pokemons[index].height,
        base_experience: this.pokemons[index].base_experience,
        ability:
          this.pokemons[index].abilities[0].is_hidden === false
            ? this.pokemons[index].abilities[0].ability.name
            : this.pokemons[index].abilities[1].ability.name,
        // abilityImg:
        //   this.pokemons[index].abilities[0].is_hidden === false
        //     ? this.pokemons[index].abilities[0].ability.url
        //     : this.pokemons[index].abilities[1].ability.url,
      },
    };
    this._router.navigate(['/pokemon-details'], {
      state: { pokemonsdetails: navigationExtras },
    });
    // https://stackblitz.com/edit/angular-route-ex-rkunsj?file=src%2Fapp%2Fapp.component.ts
  }
}
