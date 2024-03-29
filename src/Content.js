import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

  // create new list by reversing the 'checked' property of checked item
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  // create new list by filtering out the item that is passed in to the func
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
  }

  return (
    <main>
      {/* if list is not empty */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input 
                type="checkbox" 
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label 
                onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked) ? { textDecoration: 'line-through'} : null}
              >{item.item}</label>
              <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                role="button" 
                tabIndex="0" 
              />
            </li>
          ))}
        </ul>
      /* if list is empty then */
      ) : (
        <p>Your list is empty!</p>
      )}
    </main>
  )
}

export default Content