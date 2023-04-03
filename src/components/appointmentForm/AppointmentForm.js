import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = (props) => {

  const handleChange = ({ target }) => {
    const { value } = target;
    
    if (target.id === 'title') {
      props.setCurrentTitle(value);
    } else if (target.id === 'time') {
      props.setCurrentTime(value);
    }
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <h5>Title</h5>
      <input type="text" id="title" placeholder="Enter title" value={props.currentTitle} onChange={handleChange} />
      <h5>Date</h5>
      <ReactDatePicker selected={props.currentDate} minDate={new Date()} dateFormat="dd/MM/yyyy" value={props.currentDate} onChange={(date) => props.setCurrentDate(date)} />
      <h5>Time</h5>
      <input value={props.currentTime} type="time" id="time" onChange={handleChange} />
      <h5>Contact</h5>
      <ContactPicker 
        contacts={props.contacts}
        setCurrentContact={props.setCurrentContact} />
      <button type='submit'>Submit</button>
    </form>
  );
};
