import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, handleAddContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const contactData = contacts.filter((contact) => contact.name === name);
    console.log(contactData);
    if (contactData.length > 0) {
      window.alert(
        `${name} already exist as a contact, kindly create another contact.`,
      );
      return;
    } else {
      handleAddContact(name, phoneNumber, email);
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
          name={name}
          setName={setName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        ></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}></TileList>
      </section>
    </div>
  );
};
