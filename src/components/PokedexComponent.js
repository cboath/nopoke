import React, { useState } from 'react'
import GetDexes from './GetDexes'
// const Pokedex = require("pokeapi-js-wrapper")
// const P = new Pokedex.Pokedex()

const PokedexComponent = () => {
    const [snippet] = useState(GetDexes)
    const [theDexes] = useState([])

    snippet.then(wring => {
        wring.map(singleDex => {
            console.log('SN ', singleDex.name)
            theDexes.push({ name: singleDex.name, url: singleDex.url })
            return singleDex
        }
        )
    })


    console.log('WhoDat: ', theDexes)
    return(
    <h1>
        {theDexes.map((dexSolo) => {return <a href={dexSolo.url}>{dexSolo.name}</a>} )}
    </h1>
    )
}

export default PokedexComponent