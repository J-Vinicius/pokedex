import { pokemonId, ImagemPokemon, badgePokemons } from 'utils';

function PokemonCard({name, imagem, tipos}) {


    return (
        <div className={`max-w-full border border-gray-200 rounded shadow bg-${tipos[0].type.name} bg-fundoPokemon bg-no-repeat bg-left-top`}>
            <div className="w-100 flex justify-end">
                <p className="text-gray-300 opacity-80 text-xl mr-2 mt-1 font-mono">#{pokemonId(imagem)}</p>
            </div>
            <div> 
                <img className="rounded w-fit z-50" src={ImagemPokemon(imagem)} alt={name} />
            </div>
            <div className="px-2 pt-0 bg-gray-800 from-gray-500 z-50">
                <div className="py-2 w-full flex items-center justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-white capitalize">{name}</h5>
                    <div className="flex space-x-2">
                        {badgePokemons(tipos)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;