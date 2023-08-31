import React, { useEffect, useState } from 'react'

export const PokeDesc = ({data}) => {

    const [descricao, setDescricao] = useState([]);
    useEffect(() => {
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        fetch(data.species.url).then(response => response.json()).then(receiveData => setDescricao(receiveData.flavor_text_entries[3].flavor_text));
    }

    return (
        <div className="px-4 md:px-10 my-4">
            <p>{descricao}</p>
        </div>
    )
}
