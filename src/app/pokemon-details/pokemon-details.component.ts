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
  pokemonImage: string;
  pokemonWeight: number;
  pokemonHeight: number;
  pokemon_experience: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.details = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.pokemonName = this.details.pokemonsdetails.queryParams.name;
    this.pokemonWeight = this.details.pokemonsdetails.queryParams.weight;
    this.pokemonHeight = this.details.pokemonsdetails.queryParams.height;
    this.pokemonHeight = this.details.pokemonsdetails.queryParams.height;
    this.pokemon_experience = this.details.pokemonsdetails.queryParams.base_experience;
    this.pokemonAbility = this.details.pokemonsdetails.queryParams.ability;
    this.pokemonImage = this.details.pokemonsdetails.queryParams.image;
  }
}