<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Contador: {{ counter }}</h1>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Zerar</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/CounterStore';
import { mapActions, storeToRefs } from 'pinia';

const { counter } = storeToRefs(useCounterStore());
const { decrement, increment, reset } = mapActions(useCounterStore, [
  'increment',
  'decrement',
  'reset',
]);
</script>
