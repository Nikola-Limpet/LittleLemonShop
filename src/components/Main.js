import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// import About from './About';
import Menu from './Menu';
import Booking from './Booking';
import Header from './Header';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {

  const seedRandom = (seed) => {
    let random = Math.sin(seed) * 10000;
    return {
      get: () => {
        random = Math.sin(random) * 10000;
        return random - Math.floor(random);
      }
    };
  };

  const fetchTimes = (date) => {
    // Add API call here
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i < 23; i++) {
      if (random.get() < 0.5) {
        result.push(i + ':00');
      }
      if (random.get() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = (formdata) => {
    // Add API call here
    return true;
  };

  function updateTimes(state, date) {
    return { availableTimes: fetchTimes(new Date(date)) };
  }

  const initialState = { availableTimes: fetchTimes(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  function submitForm(formdata) {
    if (submitAPI(formdata)) {
      navigate('/confirmed');
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={
          <Booking
            availableTimes={state.availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />  
        } />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Main;