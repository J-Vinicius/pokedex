// Refatorações

// -Id
export const pokemonId = (id) => {
    if (id <= 9) {
        var fID = `00${id}`
    } else if (id < 99) {
        fID = `0${id}`
    } else if (id < 999) {
        fID = `${id}`
    }
    return fID
}

// - Moves
export const pokemonMoves = (abilities) => {
    if(abilities[1]) {
        return (
            <>
                <li className={`text-gray-800 capitalize list-none`}>{abilities[0].ability.name}</li>
                <li className={`text-gray-800 capitalize list-none`}>{abilities[1].ability.name}</li>
            </>
        )
    }
    return (
        <li className={`text-gray-800 capitalize list-none`}>
            <p>{abilities[0].ability.name}</p>
        </li>
    )
}


// - Types
export const pokemonTipos = (tipos) => {

    const estiloChip = "text-white font-medium mr-2 px-2.5 py-0.5 rounded-full capitalize list-none flex items-center space-x-1 pl-0 pr-4"

    if(tipos[2]) {
        return (
            <>
                <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>
                    <div className={`w-8 h-8 bg bg-${tipos[0].type.name}T bg-contain rounded-full scale-110`}></div>
                    <p>{tipos[0].type.name}</p>
                </li>
                <li className={`bg-${tipos[1].type.name} ${estiloChip}`}>
                    <div className={`w-8 h-8 bg bg-${tipos[1].type.name}T bg-contain rounded-full scale-110`}></div>
                    <p>{tipos[1].type.name}</p>
                </li>
                <li className={`bg-${tipos[2].type.name} ${estiloChip}`}>
                    <div className={`w-8 h-8 bg bg-${tipos[2].type.name}T bg-contain rounded-full scale-110`}></div>
                    <p>{tipos[2].type.name}</p>
                </li>
            </>
        )
    } else if (tipos[1]) {
        return (
            <>
                <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>
                    <div className={`w-8 h-8 bg bg-${tipos[0].type.name}T bg-contain rounded-full scale-110`}></div>
                    <p>{tipos[0].type.name}</p>
                </li>
                <li className={`bg-${tipos[1].type.name} ${estiloChip}`}>
                    <div className={`w-8 h-8 bg bg-${tipos[1].type.name}T bg-contain rounded-full scale-110`}></div>
                    <p>{tipos[1].type.name}</p>
                </li>
            </>
        )
    }
    return (
        <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>
            <div className={`w-8 h-8 bg bg-${tipos[0].type.name}T bg-contain rounded-full scale-110`}></div>
            <p>{tipos[0].type.name}</p>
        </li>
    )
}

// - Bagdes 
export const badgePokemons = (tipos) => {
   
    if (tipos[1]) {
        return (
            <>
                <div className={`w-8 h-8 bg bg-${tipos[0].type.name}T bg-contain rounded-full`}></div>
                <div className={`w-8 h-8 bg bg-${tipos[1].type.name}T bg-contain rounded-full`}></div>
            </>
        )    
    }
    return (
        <div className={`w-8 h-8 bg bg-${tipos[0].type.name}T bg-contain rounded-full`}></div>
    )
}

// - Imagem Pokemon

export const ImagemPokemon = (imagem) => {
    var id = parseInt(imagem)
    if (id <= 9) {
        var url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`
    } else if (id < 99) {
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`
    } else if (id < 999) {
        url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    }
    return url
}

// - Peso
export const pesoPokemon = (pokeWeight) => {
    var pesoPokemon
    if(pokeWeight >= 9) {
        return (pesoPokemon = pokeWeight / 10)
    } 
    return (pesoPokemon === pokeWeight)
}

// - Altura
export const alturaPokemon = (pokeAlt) => {
    var altPokemon = pokeAlt / 10
    return altPokemon
} 
