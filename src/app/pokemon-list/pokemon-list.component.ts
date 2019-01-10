import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService,
    meta: Meta,
    title: Title) {
    title.setTitle('Meus Pokemons');
    meta.addTags([
      {
        name: 'author', content: ''
      },
      {
        name: 'keywords', content: ''
      },
      {
        name: 'description', content: 'Listagem de Pokémons'
      }
    ]);
  }

  ngOnInit() {
    this.pokemonService.listPokemons()
      .then(pokemons => {
        this.pokemonList = pokemons;
      });
  }

}
