import React, { useState } from 'react'

export const Listanombres = () => {

  const [ inputPlayer , setInputPlayer ] = useState('')
  const [players, setPlayers] = useState([])

  const handleAdd = () => {

    const newArray = [...players, inputPlayer]
    setPlayers( newArray )
  }

  const handleChange = (e) => {
    const { value } = e.target
    setInputPlayer(value)
  }

  return (
    <>

    <div>
      <ul>
        {
          players.map( (player, key)  => {
            return <li key={key}> { player } </li>
          })
        }
      </ul>
    </div>

      <div>
        <input type="text" placeholder='agregue un nombre a la lista' onChange={ handleChange } />
      </div>
      <button onClick={ handleAdd }>Agregar a la lista</button>
    </>
  )
}
