// src/types.ts

// Lo que guardaremos de cada Pokémon
export interface PokemonLocal {
  id: number;
  nombre: string;
  img: string;
  hp: number;
  ataque: number;
  defensa: number;
}

// Lo que guardaremos de cada Digimon
export interface DigimonLocal {
  nombre: string;
  img: string;
  level: string;
}

// Tipos para las respuestas de las APIs (opcional, para ser muy estrictos)
export interface PokeApiResponse {
  id: number;
  name: string;
  sprites: {
    other: { 'official-artwork': { front_default: string } };
    front_default: string;
  };
  stats: { base_stat: number }[];
}

export interface DigimonApiResponse {
  name: string;
  img: string;
  level: string;
}