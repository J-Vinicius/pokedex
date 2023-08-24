import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'pages/Inicio'
import { Info } from 'pages/Info'

export const Router = () => {
    const [pokemonData, setPokemonData] = useState() 

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio setPokemonData={setPokemonData} />} />
            <Route path='/info/:id/:name' element={<Info pokemonData={pokemonData}/>} />
        </Routes>
    </BrowserRouter>
    )
}
