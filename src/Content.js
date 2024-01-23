import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Cocoa-covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Freshly-packed Hazelnuts"
    },
    {
      id: 3,
      checked: false,
      item: "Home-brewed Ginger-flavoured Beers"
    }
  ])

  // Identify the checked item by its id & Reverse the state of its 'checked' property 
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  return (
    <main>
      <ul role="list">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt 
              role="button" 
              tabIndex="0" 
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content