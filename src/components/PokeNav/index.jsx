import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { pokemonId } from 'utils'

export const PokeNav = ({tipo, nome, id}) => {
  return (
    <nav className={`border-gray-200 bg-${tipo} text-green-300`}>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to='/' className="flex items-center w-8 h-8 gap-x-4">
                <AiOutlineArrowLeft className="w-8 h-8 text-white"/>
            </Link>
            <h2 className="self-center text-2xl font-semibold whitespace-nowrap capitalize text-white">{nome}</h2>
            <p className="text-base text-white">#{pokemonId(id)}</p>
        </div>
    </nav>
  )
}
