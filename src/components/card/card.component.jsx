import React from 'react'
import './card.styles.css'

export const Card = (props)=>(
  <div className='card-container'>
    <img alt='superhero' src={`${props.superhero.images.md}`}/>
    <h2>{props.superhero.name}</h2>
    <p>power: {props.superhero.powerstats.power}</p>
    <p>speed: {props.superhero.powerstats.speed}</p>
  </div>
)