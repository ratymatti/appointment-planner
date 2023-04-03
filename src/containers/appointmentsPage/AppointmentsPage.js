import React from "react";
import { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addAppointment({title: currentTitle, contact: currentContact, date: currentDate.toLocaleDateString('en-GB'), time: currentTime});
    setCurrentTitle(''); setCurrentContact(''); setCurrentDate(''); setCurrentTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          currentTitle={currentTitle}
          currentContact={currentContact}
          currentDate={currentDate}
          currentTime={currentTime}
          setCurrentTitle={setCurrentTitle}
          setCurrentContact={setCurrentContact}
          setCurrentDate={setCurrentDate}
          setCurrentTime={setCurrentTime}
          handleSubmit={handleSubmit}
          contacts={props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          appointments={props.appointments} />
      </section>
    </div>
  );
};
