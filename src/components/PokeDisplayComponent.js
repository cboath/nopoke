import React, { useState, useEffect } from 'react'
const Pokedex = require("pokeapi-js-wrapper")

const PokeDisplyComponent = () => {
    const [selectedPoke, setSelectedPoke] = useState([]);
    const [pokeImg , setPokeImg] = useState([])
    const selectedPokehc = 'ditto'

    useEffect(function () {
        const P = new Pokedex.Pokedex();
        async function fetchData() {
            await P.getPokemonByName(selectedPokehc).then(response => {
                setSelectedPoke(response)
                setPokeImg(response.sprites.front_default)
            })
                .catch(err => console.log('Busted'))
        }
        fetchData();
    }, []);

    console.log('SP', selectedPoke)

    return (
        <div>
            <img src={pokeImg} />
            <h1>{selectedPokehc}</h1>
            <h2>{selectedPoke.weight}</h2>

        </div>
    )

}

export default PokeDisplyComponent