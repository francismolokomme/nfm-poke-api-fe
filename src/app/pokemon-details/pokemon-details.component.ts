import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  details: any;
  pokemonName: string;
  pokemonAbility: string;
  pokemonAbilityImg: string;
  pokemonWeight: number;
  pokemonHeight: number;
  pokemon_experience: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.details = this.router.getCurrentNavigation().extras.state;
    // console.log(this.details.pokemonsdetails);

    // console.log('details :' + JSON.stringify(this.details, null, 2));
  }

  ngOnInit(): void {
    // console.log('see details');
    // this how you get the data e.g name below
    // console.log(this.details.pokemonsdetails.queryParams.name);

    this.pokemonName = this.details.pokemonsdetails.queryParams.name;
    this.pokemonWeight = this.details.pokemonsdetails.queryParams.weight;
    this.pokemonHeight = this.details.pokemonsdetails.queryParams.height;
    this.pokemonHeight = this.details.pokemonsdetails.queryParams.height;
    this.pokemon_experience = this.details.pokemonsdetails.queryParams.base_experience;
    this.pokemonAbility = this.details.pokemonsdetails.queryParams.ability;
    // this.pokemonAbilityImg = this.details.pokemonsdetails.queryParams.abilityImg;
  }
}
