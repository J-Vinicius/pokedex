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

    return (
        <div className={`max-w-full border border-gray-200 rounded shadow bg-${tipos[0].type.name} bg-fundoPokemon bg-right-top`}>
            <div className="w-100 flex justify-end">
                <p className="text-gray-300 opacity-80 text-xl mr-2 mt-1 font-mono">#{fID}</p>
            </div>
            <div> 
                <img className="rounded w-fit z-50" src={url} alt={name} />
            </div>
            <div className="px-2 pt-0 bg-gray-800 from-gray-500 z-50">
                <div className="py-2 w-full flex-inline items-center justify-between">
                    <h5 className=" text-center text-2xl font-bold tracking-tight text-white capitalize">{name}</h5>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;