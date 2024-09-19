import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({ date, time, guest, occasion }); // Ensure the form data is correctly passed
  };

  const handleChange = (e) => { 
    setDate(e);
    props.dispatch({ type: 'SET_DATE', payload: e });
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input type="date" id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" value={time} onChange={e => setTime(e.target.value)}>
                <option value="">Select a Time</option>
                {
                  props.availableTimes.map((time, index) => {
                    return <option key={index} value={time}>{time}</option>;
                  })
                }
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input type="number" id="book-guests" min='1' value={guest} onChange={e => setGuest(e.target.value)} required />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Wedding</option> 
                <option>Other</option> 
              </select>
            </div>

            <div className='btnReceive'>
              <input aria-label='On Click' type='submit' value={"Make a Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;