import React from 'react'
import recipes from '../recipes'

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h1>Most poplular order</h1>
        <button>See Menu</button>
      </div>

      <div className='cards'>
        {
          recipes.map((item, index) => {
            return (
              <div key={index} className='menu-items'>
                <img src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <h3>{item.price}</h3>
                </div>
                <button className='orderbtn'>Order Now</button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Menu