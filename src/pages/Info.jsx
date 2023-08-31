import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pokemonTipos } from 'utils';
import { PokeNav } from 'components/PokeNav';
import { PokeImg } from 'components/PokeImg';
import { PokeTitulo } from 'components/PokeTitulo';
import { PokeInfo } from 'components/PokeInfo';
import { PokeDesc } from 'components/PokeDesc';

export const Info = ({ pokemonData }) => {

    const {abilities} = pokemonData || {};
    const navigate = useNavigate()
    useEffect(() => {
        if (!pokemonData) {
            navigate("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!pokemonData) {
        return null;
    }

    const tipoColor = pokemonData.types[0].type.name;
    
    return (
    <div className={`w-full bg-${tipoColor}`}>
        <div className="max-w-lg mx-auto">
            <PokeNav tipo={pokemonData.types[0].type.name} nome={pokemonData.name} id={pokemonData.id}/>
            <PokeImg tipo={pokemonData.types[0].type.name} nome={pokemonData.name} id={pokemonData.id}/>
            <section className="h-fit -mt-32 pt-32 max-w-full bg-gray-100 pt-24 rounded mx-1 my-2 pb-4">
                <div className="w-full -mt-12 flex items-center justify-center space-x-2 capitalize">
                    {pokemonTipos(pokemonData.types)}
                </div>
                <PokeTitulo tipo={pokemonData.types[0].type.name}>About</PokeTitulo>
                <PokeInfo peso={pokemonData.weight} altura={pokemonData.height} habilidades={abilities} />
                {/* Descrção Pokemon */}
                <PokeDesc data={pokemonData} />
                <PokeTitulo tipo={pokemonData.types[0].type.name}>Status Base</PokeTitulo>
                <div className="mx-auto w-full">
                    <table className="w-full text-sm text-right text-black border-spacing-x-2">
                        <tbody>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    HP
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[0].base_stat}
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[0].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    ATK
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[1].base_stat}
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[1].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    DEF
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[2].base_stat}
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[2].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    SATK
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[3].base_stat}
                                </td>
                                <td>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[3].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    SDEF
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[4].base_stat}
                                </td>
                                <td className="w-9/12">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[4].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className={`text-${tipoColor} text-lg font-medium uppercase`}>
                                    SPD
                                </th>
                                <td className="pr-2">
                                    {pokemonData.stats[5].base_stat}
                                </td>
                                <td className="w-9/12">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className={`bg-${tipoColor} h-2.5 rounded-full w-p${pokemonData.stats[5].base_stat}`}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
    )
}
