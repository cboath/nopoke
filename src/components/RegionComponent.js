import React, { useState, useEffect } from 'react'
const Pokedex = require("pokeapi-js-wrapper")

const RegionComponent = () => {
    const [regionDex, setRegionDex] = useState([]);
    const regionDexhc = 'national'

    useEffect(function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.getPokedexByName(regionDexhc).then(response => setRegionDex(response.pokemon_entries))
                .catch(err => console.log('Busted'))
        }
        fetchData();
    }, []);

    console.log('RD', regionDex)

    return (
        <ul >
            {regionDex.map((pokes) => <a key={pokes.pokemon_species.name} href={pokes.pokemon_species.url}><p>{pokes.pokemon_species.name}</p></a>)}
        </ul>
    )

}

export default RegionComponent