const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

const dexes = () => { 
    const heet = P.resource(["/api/v2/pokedex"])
    .then(results => {
        return results[0].results
    })
    return heet
}
export default dexes