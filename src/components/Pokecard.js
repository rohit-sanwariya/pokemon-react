import React, { Component } from 'react'
import '../styles/Pokecard.css'
const POKE_API ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
 
 class Pokecard extends Component {
    render() {
        const imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div className={"Pokecard"}>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt="bulbasuar"/>
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
    }
}
export default Pokecard;