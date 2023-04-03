import React from "react";

export const ContactForm = (props) => {

  const handleChange = ({ target }) => {
    const { value } = target;
    
    if (target.id === 'name') {
      props.setCurrentName(value);
    } else if (target.id === 'phone') {
      props.setCurrentPhone(value);
    } else if (target.id === 'email') {
      props.setCurrentEmail(value);
    }
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <h5>Name</h5>
      <input type="text" id="name" placeholder="Enter name" value={props.currentName} onChange={handleChange} />
      <h5>Phone</h5>
      <input type="text" id="phone" placeholder="Enter phone" value={props.currentPhone} onChange={handleChange} />
      <h5>Email</h5>
      <input type="text" id="email" placeholder="Enter email" value={props.currentEmail} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
};
