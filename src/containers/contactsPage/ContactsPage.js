import React from "react";
import { useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = props.contacts.some(element => element.name === currentName);

    if (duplicate) {
      alert('Name already in use. Choose different name.')  
    } else {
      if (!currentName.length) {
        alert('Please enter a name.')  
      } else if (!currentPhone.length) {
        alert('Please enter a phone number.')  
      } else if (!currentEmail.length) {
        alert('Please enter a email address.')  
      } else {
        props.addContact({name: currentName, phone: currentPhone, email: currentEmail});
        setCurrentName(''); setCurrentPhone(''); setCurrentEmail('');
      }
    }
  };
  
  //should add phone validation later. at least regex that checks numbers and + only

  return (
    
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          currentName={currentName}
          currentPhone={currentPhone}
          currentEmail={currentEmail}
          setCurrentName={setCurrentName}
          setCurrentPhone={setCurrentPhone}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contacts={props.contacts}  />
      </section>
    </div>
  );
};
