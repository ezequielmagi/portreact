import React, { useState } from 'react'
import { Blog } from './components/Blog'
import { Listanombres } from './components/ListaNombres/Listanombres'

function App ()  {

  const [ message , setMessage] = useState('')

  const [counter , setCounter] = useState(0)

  const [age , setAge] = useState(0)

  const clickMe = () => {
    setMessage('soy un mensaje actualizado')
  }

  const handleChange = (e) => {
    const {valueAsNumber} = e.target
   setAge( valueAsNumber )
  //  ValueAsNumber me evita tener que parsear el dato que ingresa, que recordemos es un string
  }

  const handleSum = () => {
    setCounter( counter => counter +1 )
  }

  const handleSubstract = () => {
    setCounter( counter => counter - 1 )
  }

  return (
    <div>
      <span> Este mensaje sale cuando clickeas el boton: { message } </span>
      <Blog />
      <div> 
        <button onClick={ handleSubstract }> - </button>
        <span> { counter } </span>
        {
          counter === 10 && (
            <p>Llegamos a 10!</p>
          )
        }
        <button onClick={ handleSum }> + </button>
      </div>
      

      <button onClick={ clickMe } >Click Me</button>
        <div>
          <input type="text" name='name' placeholder='name' onChange={handleChange}  />
        </div>
        <div>
          <input type="text" name='surename' placeholder='surename' onChange={handleChange} />
        </div>
        <div>
          <input type="number" name='age' placeholder='age' onChange={handleChange} />
          {
            age < 21 ? (
              <p> Aun sos menor de edad </p>
            ) : (
              <p> Ya eres mayor de edad </p>
            )
          }
        </div>
        <Listanombres />
    </div>
  )
}

export default App