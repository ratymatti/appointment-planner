import React from "react";

export const ContactForm = (props) => {

  const handleChange = ({ target }) => {
    const { name, value } = target;
    
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
      <input type="text" id="name" placeholder="Enter name" value={props.currentName} onChange={handleChange} />
      <input type="text" id="phone" placeholder="Enter phone" value={props.currentPhone} onChange={handleChange} />
      <input type="text" id="email" placeholder="Enter email" value={props.currentEmail} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
};
