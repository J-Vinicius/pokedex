import pokeball from '../../assets/images/pokeball.png'

function PokemonCard({name, imagem, tipos}) {

    var id = parseInt(imagem)
    if (id <= 9) {
        var url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`
    } else if (id < 99) {
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`
    } else if (id < 999) {
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    }

    if (id <= 9) {
        var fID = `00${id}`
    } else if (id < 99) {
        fID = `0${id}`
    } else if (id < 999) {
        fID = `${id}`
    }

    const tiposPokemon = () => {
        if(tipos[1]) {
            return (
                <ul className="flex mb-2 md:mb-0">
                    <li className={`text-gray-100 bg-${tipos[0].type.name} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded`}>{tipos[0].type.name}</li>
                    <li className={`text-gray-100 bg-${tipos[1].type.name} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded`}>{tipos[1].type.name}</li>
                </ul>
            )
        }

        return (
            <ul className="flex mb-2 md:mb-0">
                <li className={`text-gray-100 bg-${tipos[0].type.name} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded`}>{tipos[0].type.name}</li>
            </ul>
        )
    }

    return (
        <div className={`max-w-full border border-gray-200 rounded shadow bg-${tipos[0].type.name}`}>
            <div className="relative">
                <img className="absolute w-36 h-36 top-0 right-0 z-10" src={pokeball} alt="Pokebal" />
            </div>
            <div className="w-100 flex justify-end">
                <p className="text-gray-300 opacity-90 text-xl mr-2 mt-1 font-mono">#{fID}</p>
            </div>
            <div className="z-50"> 
                <img className="rounded w-fit z-50" src={url} alt={name} />
            </div>
            <div className="px-2 pt-0 bg-gradient-to-t from-gray-500 z-50">
                <div className="w-full md:flex items-center justify-between">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white capitalize">{name}</h5>
                    {tiposPokemon()}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;