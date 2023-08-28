import React from 'react'

export const PokeTitulo = ({children , tipo}) => {
  return (
    <h2 className={`w-full flex items-center justify-center my-4 text-${tipo} text-lg font-bold`}>
        {children}
    </h2>
  )
}
