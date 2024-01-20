import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Sandro')
  const [count, setCount] = useState(0)

  const handleNameChange = () => {
    const names = ["Fabrice", "Fastoch", "Timothée", "Sandro", "Aurélie"]
    const int = Math.floor(Math.random() * names.length) 
    setName(names[int])
  }

  const handleClick = () => {
    console.log(count)
    setCount(count+1)
  }

  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button 
        onClick={() => {
          handleNameChange();
          handleClick();
        }}>
        Change name
      </button>
    </main>
  )
}

export default Content