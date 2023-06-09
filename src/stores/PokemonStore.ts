import { defineStore } from 'pinia';
import pokemons from '@/data/data.json';

export type PokemonTypes = {
  id: string;
  image: string;
  name: string;
  type: string[];
  weight: number;
  height: number;
  moves: string[];
  description: string;
  status: PokemonStatusTypes;
};

export type PokemonStatusTypes = {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
};

export default defineStore('PokemonStore', {
  state: () => {
    return { pokemons };
  },
  // actions
  // getters
});
