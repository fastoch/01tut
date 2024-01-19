import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ["Dave", "Fastoch", "John", "Nicolas", "Randy", "Laura"]
    const int = Math.floor(Math.random() * names.length) 
    return names[int]
  }

  const handleClick = () => {
    console.log("You clicked me!")
  }

  const handleClick2 = (name) => {
    console.log(`Hello ${name}!`)
  }

  const handleClick3 = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.innerText)
  }

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2("fastoch")}>Say hello</button>
      <button onClick={(e) => handleClick3(e)}>Click me</button>
    </main>
  )
}

export default Content