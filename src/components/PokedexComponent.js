import React, { useState, useEffect } from 'react'
const Pokedex = require("pokeapi-js-wrapper")

const PokedexComponent = () => {
    const [allDexes, setAllDexes] = useState([]);

    useEffect(function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.resource("api/v2/pokedex").then(response => setAllDexes(response.results))
                .catch(err => console.log('Busted'))
        }
        fetchData();
    }, []);

    return (
        <ul >
            {allDexes.map((dexName) => <a key={dexName.name} href={dexName.url}><p>{dexName.name}</p></a>)}
        </ul>
    )

}

export default PokedexComponent