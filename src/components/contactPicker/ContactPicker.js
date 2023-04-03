import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={(event) => props.setCurrentContact(event.target.value)}>
      <option>None</option>
      {props.contacts ? props.contacts.map(contact => {
        return <option key={contact.id}>{contact.name}</option>;
      }) : null}
    </select>
  );
};
