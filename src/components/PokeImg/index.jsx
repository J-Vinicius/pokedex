import React from 'react'
import { pokemonId } from 'utils'

export const PokeImg = ({tipo, nome, id}) => {
  return (
    <div className={`-mt-10 w-full bg-${tipo} bg-fundoPokemon bg-no-repeat bg-right-top`}>
        <img className="self-center h-9/12 w-full p-12" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId(id)}.png`} alt={nome} />
    </div>
  )
}
