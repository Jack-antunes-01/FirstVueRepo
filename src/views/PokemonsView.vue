<script setup lang="ts">
import { storeToRefs } from 'pinia';

import usePokemonStore from '@/stores/PokemonStore';

const { pokemons } = storeToRefs(usePokemonStore());
</script>

<template>
  <div id="container">
    <div class="pokemons" v-for="(pokemon, index) in pokemons" :key="index">
      <h1>{{ pokemon.name }} #{{ pokemon.id }}</h1>
      <img :src="require(`@/assets/${pokemon.image}`)" />
      <div>{{ pokemon.description }}</div>
      <div>Weight: {{ pokemon.weight }}kg</div>
      <div>Height: {{ pokemon.height }}m</div>
    </div>
  </div>
</template>

<style>
#container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.pokemons {
  border: 2px solid black;
  margin-bottom: 16px;
}

.pokemons:hover {
  background-color: rgb(244, 241, 241);
  cursor: pointer;
}
</style>
