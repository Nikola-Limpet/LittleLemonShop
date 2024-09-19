import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  return (
    <BookingForm 
      availableTimes={props.availableTimes}  
      dispatch={props.dispatch} 
      submitForm={props.submitForm} // Ensure the prop name matches
    />
  );
};

export default Booking;