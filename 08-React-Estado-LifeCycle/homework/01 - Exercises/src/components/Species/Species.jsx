import React from 'react'

export default function Species (props) {
  const { species, handleSpecies, handleAllSpecies } = props;
  return (
    <div>
      <h2>Species</h2>
      {species.map((elemento, key) => (
        <button key={key} onClick={handleSpecies} value={elemento}>
          {elemento}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}
