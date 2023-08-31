import React from 'react'
import { TbWeight } from 'react-icons/tb';
import { MdHeight } from 'react-icons/md';
import { alturaPokemon, pesoPokemon, pokemonMoves } from 'utils';

export const PokeInfo = ({peso, altura, habilidades}) => {
  return (
    <div className="grid grid-cols-3 mx-2 divide-x">
        <div className="grid gap-1 h-100">
                <div className="flex items-center justify-center gap-2">
                <TbWeight className="w-8 h-8"/>
                <p>{pesoPokemon(peso)}Kg</p>
        </div>
            <p className="w-full flex items-center justify-center text-gray-600">Weight</p>
        </div>
        <div className="grid gap-1 h-100">
            <div className="flex items-center justify-center gap-2">
                <MdHeight className="w-8 h-8"/>
                <p>{alturaPokemon(altura)}m</p>
            </div>
            <p className="w-full flex items-center justify-center text-gray-600">Height</p>
        </div>
        <div className="grid gap-1 h-100">
            <ul className="text-center">{pokemonMoves(habilidades)}</ul>
            <p className="w-full flex items-center justify-center text-gray-600">Moves</p>
        </div>
    </div>
  )
}
