import React from 'react'
import { Link } from 'react-router-dom'
import { TbWeight } from 'react-icons/tb';
import { MdHeight } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';

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

    const movimentosPokemon = () => {
        if(pokemonData.abilities[1]) {
            return (
                <>
                    <li className={`text-gray-800 capitalize list-none`}>{pokemonData.abilities[0].ability.name}</li>
                    <li className={`text-gray-800 capitalize list-none`}>{pokemonData.abilities[1].ability.name}</li>
                </>
            )
        }
        return (
            <li className={`text-gray-800 capitalize list-none`}>{pokemonData.abilities[0].ability.name}</li>
        )
    }

    const pesoPokemon = (pesoPokemon) => {
        if(pokemonData.weight >= 9) {
            return (pesoPokemon = pokemonData.weight / 10)
        } 
        return (pesoPokemon = pokemonData.weight)
    }

    const alturaPokemon = (altPokemon) => {
        return (altPokemon = pokemonData.height / 10)
    }

    
    
    return (
    <div className={`w-full bg-${tipoColor}`}>
        <div class="max-w-[400px] mx-auto">
            <nav className={`border-gray-200 bg-${tipoColor} text-green-300`}>
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center gap-x-4">
                        <AiOutlineArrowLeft className="w-6 h-6 text-white"/>
                    </Link>
                    <h2 className="self-center text-2xl font-semibold whitespace-nowrap capitalize text-white">{pokemonData.name}</h2>
                    <p className="text-sm text-white">#{fID}</p>
                </div>
            </nav>
            <div className={`p-12 -mt-10 w-full bg-${tipoColor}`}>
                <img className="self-center h-10/12 w-full" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fID}.png`} alt={pokemonData.name} />
            </div>
            <section className="h-screen -mt-32 pt-32 max-w-full bg-gray-100 pt-24 rounded mx-1 my-2 pb-4">
                <div className="w-full -mt-12 flex items-center justify-center">
                    {tiposPokemon()}
                </div>
                <h2 className={`w-full flex items-center justify-center my-4 text-${tipoColor} text-lg font-bold`}>About</h2>
                <div className="h-full grid grid-cols-3 mx-2">
                    <div className="grid gap-1 h-full">
                            <div className="flex items-center justify-center gap-2">
                            <TbWeight className="w-8 h-8"/>
                            <p>{pesoPokemon()}Kg</p>
                    </div>
                        <p className="w-full flex items-center justify-center text-gray-600">Weight</p>
                    </div>
                    <div className="grid gap-1 h-full">
                        <div className="flex items-center justify-center gap-2">
                            <MdHeight className="w-8 h-8"/>
                            <p>{alturaPokemon()}m</p>
                        </div>
                        <p className="w-full flex items-center justify-center text-gray-600">Height</p>
                    </div>
                    <div className="grid gap-1 h-full">
                        <ul className="text-center">{movimentosPokemon()}</ul>
                        <p className="w-full flex items-center justify-center text-gray-600">Moves</p>
                    </div>
                </div>
                {/* <h2 className={`w-full flex items-center justify-center my-4 text-${tipoColor} text-lg font-bold`}>Status Base</h2>
                <div className="mx-4">
                    <table className="w-full text-sm text-right text-black border-spacing-x-2">
                        <tbody>
                            <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    HP
                                </th>
                                <td className="pr-2">
                                    045
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[55%]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    ATK
                                </th>
                                <td className="pr-2">
                                    049
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[50%]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    DEF
                                </th>
                                <td className="pr-2">
                                    049
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[50%]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    SATK
                                </th>
                                <td className="pr-2">
                                    065
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[50%]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    SDEF
                                </th>
                                <td className="pr-2">
                                    065
                                </td>
                                <td className="w-9/12">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[50%]"></div>
                                    </div>
                                </td>
                            </tr>
                        <tr>
                                <th scope="row" className="text-[#74cb48] text-lg font-medium">
                                    SPD
                                </th>
                                <td className="pr-2">
                                    045
                                </td>
                                <td className="w-9/12">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#74cb48] h-2.5 rounded-full w-[50%]"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </section>
        </div>
    </div>
    )
}
