function PokemonCard({name, imagem, tipos}) {

    var id = parseInt(imagem)
    if (id <= 9) {
        var url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`
    } else if (id < 99) {
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`
    }

    const tiposPokemon = () => {
        if(tipos[1]) {
            tipos.map((tipo) => (
                <li className={`text-gray-100 bg-${tipo.type.name} border border-slate-100 text-xs font-semibold w-fit mr-2 px-2.5 py-0.5 rounded`}>{tipo.type.name}</li>
            ))
        }
        return tipos[0].type.name
    }

    return (
        <div className="max-w-full border border-gray-200 rounded shadow bg-grass dark:border-gray-700">
            <div className="w-100 flex justify-end">
            <p className="text-gray-300 opacity-90 text-xl mr-2 mt-1 font-mono">
                {/* if (id >= 3) {
                    
                } */}
            </p>
            </div>
            <div className=""> 
                <img className="rounded w-fit" src={url} alt={url} />
            </div>
            <div className="p-5 pt-0">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white capitalize">{name}</h5>
                </div>
                <ul className="flex">
                    {tiposPokemon()}
                </ul>
            </div>
        </div>
    );
}

export default PokemonCard;