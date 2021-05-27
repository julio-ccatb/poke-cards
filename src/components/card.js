import { useState } from 'react';
import axios from 'axios'

const Card = () => {

    const [pokemon, setpokemon] = useState('');

    const GetPokemon = async () => {

        const test = await axios.get('https://pokeapi.co/api/v2/pokemon/6')
            .then(Response => Response.data)
            .then(data => {
                let poke = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_shiny
                }
                console.log(poke)
            })
    }

    GetPokemon()





    return (


        <div className="card-container">
            <div className="card-wraper">
                <img></img>
                <div className="card-body">
                    <h1 className="name">Charizal va aqui</h1>
                </div>
            </div>
        </div>
    )
}




export default Card;