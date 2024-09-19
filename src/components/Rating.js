import React from 'react';
import { FaStar } from 'react-icons/fa';

const generateRandomRating = () => (Math.random() * 2 + 3).toFixed(1); // Generates a rating between 3.0 and 5.0
const generateRandomUser = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomImage = () => {
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const generateRandomText = () => {
  const texts = [
    'Great service and delicious food!',
    'Had a wonderful time, highly recommend!',
    'The ambiance was perfect for a night out.',
    'Exceptional quality and friendly staff.',
    'A delightful experience from start to finish.',
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

const Rating = () => {
  const ratings = Array.from({ length: 5 }, () => ({
    user: generateRandomUser(),
    rating: generateRandomRating(),
    image: generateRandomImage(),
    text: generateRandomText(),
  }));

  return (
    <>
    <h2 id='rating-title'>Customer Ratings</h2>
      <div className='rating'>
        {ratings.map((item, index) => (
          <div key={index} className='rating__item'>
            <img src={item.image} alt={item.user} className='rating__image' />
            <div className='rating__details'>
              <div className='rating__stars'>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className='rating__star'
                    color={i < Math.round(item.rating) ? '#ffc107' : '#e4e5e9'}
                  />
                ))}
              </div>
              <span className='rating__user'>{item.user}</span>
              <span className='rating__average'>{item.rating}</span>
              <p className='rating__text'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rating;