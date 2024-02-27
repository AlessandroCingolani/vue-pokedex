import { reactive } from 'vue';

export const store = reactive({
  apiUrl:"https://pokeapi.co/api/v2/pokemon/charizard",
   isLoad:false,
   notFound:false,
   searchedPokemon:[],
   myPokemon:[]
  
});