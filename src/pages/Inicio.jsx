import Container from "components/Container";
import Navbar from "components/Navbar";
import PokemonCard from "components/PokemonCard";
import axios from "axios"
import { useEffect, useState } from "react";
import Carregamento from "components/Carregamento";
import { useNavigate } from "react-router-dom";

const Inicio = ({setPokemonData}) => {
    
    const [pokemons, setPokemons] = useState([]);

    const navigate = useNavigate();

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
        name.toLowerCase();
        
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

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate(`/info/${pokemonData.id}/${pokemonData.name}`);
    }

    

    return (
        <main className="bg-primary h-screen">
            <Navbar pokemonFilter={pokemonFilter} />
            <Container>
                {pokemons.length === 0 ? (
                    <Carregamento />
                    ) : (
                        pokemons.map((pokemon, key) => (
                        <button onClick={() => pokemonPickHandler(pokemon.data)} key={key}>
                            <PokemonCard 
                                name={pokemon.data.name}
                                imagem={pokemon.data.id}
                                tipos={pokemon.data.types}
                                
                            />
                        </button>
                    )))
                }
            </Container>
        </main>
    );
}


export default Inicio;