import React from "react";
import { useState } from "react";

export const ContactsPage = () => {



  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = this.props.contacts.some(element => element.name === currentName);

    if (duplicate) {
      alert('Name already in use. Choose different name.')  
    } else {
      this.props.addContact({name: currentName, phone: currentPhone, email: currentEmail});
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
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
