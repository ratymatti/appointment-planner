import React from "react";
import { useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = () => {

  const { contacts, addContact } = this.props;

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = contacts.some(element => element.name === currentName);

    if (duplicate) {
      alert('Name already in use. Choose different name.')  
    } else {
      addContact({name: currentName, phone: currentPhone, email: currentEmail});
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

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
          contacts={contacts} />
      </section>
    </div>
  );
};
