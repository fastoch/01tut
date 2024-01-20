import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of cocoa covered almonds unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "item 2"
    },
    {
      id: 3,
      checked: false,
      item: "item 3"
    }
  ])

  return (
    <main>
      <ul>
        
      </ul>
    </main>
  )
}

export default Content