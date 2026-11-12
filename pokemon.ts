type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        slot: number;
        type: { name: string; url: string };
    }[];
    sprites: {
        front_default: string | null;
    };
};

export type PokeApiError = {
    error: string;
};

async function fetchPokemon(name: string): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
        // 404 : PokéAPI renvoie le texte brut "Not Found", pas du JSON
        const problem: PokeApiError = { error: await res.text() };
        throw new Error(`Pokémon "${name}" : ${problem.error} (HTTP ${res.status})`);
    }
    const data: Pokemon = await res.json();

    // On ne garde que les champs du type, avec la même forme que l'API
    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        sprites: { front_default: data.sprites.front_default },
    };
}

const pokemon = await fetchPokemon("pikachu");

const types = pokemon.types.map((t) => t.type.name).join(", ");
const heightM = pokemon.height / 10;  // décimètres → mètres
const weightKg = pokemon.weight / 10; // hectogrammes → kilos

console.log(`${pokemon.name} (n° ${pokemon.id}) : ${types}, ${heightM} m, ${weightKg} kg`);