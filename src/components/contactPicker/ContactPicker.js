import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.setCurrentContact}>
      <option>None</option>
      {props.contacts ? props.contacts.map(contact => {
        return <option>{contact.name}</option>;
      }) : null}
    </select>
  );
};
