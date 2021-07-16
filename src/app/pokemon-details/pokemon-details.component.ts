import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})


export class PokemonDetailsComponent implements OnInit {
  pokemonName: string;
  pokemonAbility: string;
  pokemonImage: string;
  pokemonWeight: number;
  pokemonHeight: number;
  pokemon_experience: number;
  details: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.details = this.router.getCurrentNavigation().extras.state as any;
  }

  ngOnInit(): void {
    this.pokemonName = this.details.queryParams.name;
    this.pokemonWeight = this.details.queryParams.weight;
    this.pokemonHeight = this.details.queryParams.height;
    this.pokemon_experience = this.details.queryParams.base_experience;
    this.pokemonAbility = this.details.queryParams.ability;
    this.pokemonImage = this.details.queryParams.image;
  }
}
