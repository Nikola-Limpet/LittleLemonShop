import React from 'react';
import recipes from '../recipes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const orderNow = (title) => {
    toast(`Order placed successfully for ${title}`);
  };

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h1>Most popular order</h1>
        <button>
          <Link to='/menu' className='btn-menu'>
            See Menu
          </Link>
        </button>
      </div>

      <div className='cards'>
        {recipes.map((item, index) => (
          <div key={index} className='menu-items'>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <h3>{item.price}</h3>
            </div>
            <button className='orderbtn' onClick={() => orderNow(item.title)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;