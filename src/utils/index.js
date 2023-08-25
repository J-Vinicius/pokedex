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
        <li className={`text-gray-800 capitalize list-none`}>{abilities[0].ability.name}</li>
    )
}


// - Types
export const pokemonTipos = (tipos) => {

    const estiloChip = "text-white font-medium mr-2 px-2.5 py-0.5 rounded-full capitalize list-none"

    if(tipos[2]) {
        return (
            <>
                <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>{tipos[0].type.name}</li>
                <li className={`bg-${tipos[1].type.name} ${estiloChip}`}>{tipos[1].type.name}</li>
                <li className={`bg-${tipos[2].type.name} ${estiloChip}`}>{tipos[2].type.name}</li>
            </>
        )
    } else if (tipos[1]) {
        return (
            <>
                <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>{tipos[0].type.name}</li>
                <li className={`bg-${tipos[1].type.name} ${estiloChip}`}>{tipos[1].type.name}</li>
            </>
        )
    }
    return (
        <li className={`bg-${tipos[0].type.name} ${estiloChip}`}>{tipos[0].type.name}</li>
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

// - Status
// export const Status = (status) => {
//     var hpV = status[0].base_stat
//     var attackV = status[1].base_stat
//     var defenseV = status[2].base_stat
//     var specialAttackV = status[3].base_stat
//     var specialDefenseV = status[4].base_stat
//     var speedV = status[5].base_stat

//     return (
//         hpV,
//         attackV,
//         defenseV,
//         specialAttackV,
//         specialDefenseV,
//         speedV
//     )
// }
