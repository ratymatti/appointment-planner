import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = (props) => {
  /*
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  */

  const handleChange = ({ target }) => {
    const { value } = target;
    
    if (target.id === 'title') {
      props.setCurrentTitle(value);
    } 
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="title" placeholder="Enter title" value={props.currentTitle} onChange={handleChange} />
      <ReactDatePicker selected={props.currentDate} minDate={new Date()} dateFormat="dd/MM/yyyy" value={props.currentDate} onChange={(date) => props.setCurrentDate(date)} />
      {/* <ContactPicker /> */}
    </form>
  );
};
