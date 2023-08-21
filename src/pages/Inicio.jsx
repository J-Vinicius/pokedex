import Container from "components/Container";
import Navbar from "components/Navbar";
import PokemonCard from "components/PokemonCard";
import axios from "axios"
import { useEffect, useState } from "react";

const Inicio = () => {
    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = () => {
        var endpoints = []

        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        axios.all(endpoints.map((endpoint => axios.get(endpoint)))).then((res) => setPokemons(res));
    }

    const pokemonFilter = (name) => {
        var filtredPokemons = [];

        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filtredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filtredPokemons);
    }

    return (
        <main className="bg-primary h-screen">
            <Navbar pokemonFilter={pokemonFilter} />
            <Container>
                {pokemons.map((pokemon, key) => (
                    <PokemonCard 
                        name={pokemon.data.name} 
                        key={key} 
                        imagem={pokemon.data.id}
                        tipos={pokemon.data.types}
                    />
                ))}
            </Container>
        </main>
    );
}


export default Inicio;