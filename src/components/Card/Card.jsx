import React from 'react'
import './Card.css'

function Card({ topic, img, link }) {
  return (
    <div className="card">
      <h2>{topic}</h2>
      <img src={img} alt={`${topic} visual`} />
      <a href={link} target="_blank" rel="noreferrer" className="card-button">
        View Problems
      </a>
    </div>
  )
}

export default Card