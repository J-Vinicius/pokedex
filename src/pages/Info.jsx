import React from 'react'
import { Link } from 'react-router-dom'

export const Info = ({ pokemonData }) => {

    if (pokemonData.id <= 9) {
        var fID = `00${pokemonData.id}`
    } else if (pokemonData.id < 99) {
        fID = `0${pokemonData.id}`
    } else if (pokemonData.id < 999) {
        fID = `${pokemonData.id}`
    }

    const tipoColor = pokemonData.types[0].type.name;

    const tiposPokemon = () => {
        if(pokemonData.types[1]) {
            return (
                <>
                    <li className={`text-gray-100 bg-${tipoColor} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded list-none`}>{tipoColor}</li>
                    <li className={`text-gray-100 bg-${pokemonData.types[1].type.name} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded list-none`}>{pokemonData.types[1].type.name}</li>
                </>
            )
        }

        return (
            <li className={`text-gray-100 bg-${tipoColor} capitalize drop-shadow-xl text-xs font-semibold w-fit h-fit mr-2 px-2.5 py-0.5 rounded list-none`}>{tipoColor}</li>
        )
    }

    
    
    return (
    <div className={`w-full bg-${tipoColor}`}>
        <div class="max-w-[400px] mx-auto">
            <nav className={`border-gray-200 bg-${tipoColor} text-green-300`}>
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center gap-x-4">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                    </Link>
                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap capitalize text-white">{pokemonData.name}</h2>
                    <p className="text-sm text-white">#{fID}</p>
                </div>
            </nav>
            <div className={`p-12 w-full bg-${tipoColor}`}>
                <img className="self-center h-10/12 w-full" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fID}.png`} alt={pokemonData.name} />
            </div>
            <section className="h-full -mt-32 pt-32 max-w-full bg-gray-100 pt-24 rounded mx-1 my-2 pb-4">
                <div className="w-full -mt-12 flex items-center justify-center">
                    {tiposPokemon()}
                </div>
                <h2 className={`w-full flex items-center justify-center my-4 text-${tipoColor} text-lg font-bold`}>About</h2>
                <p class="w-full flex items-center justify-center p-4 text-base break-words box-border">{pokemonData.height}</p>
            </section>
        </div>
    </div>
    )
}
