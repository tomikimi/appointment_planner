import React from "react";

export const ContactPicker = ({ contacts, handleContact, value, name }) => {
  return (
    <>
      <div>
        <label name="contact" htmlFor="contact">
          Contacts
        </label>
        <select name={name} value={value} onChange={handleContact}>
          <option value="">No Contact Selected</option>
          {contacts.map((contact, i) => (
            <option key={i} value={contact.name}>
              {contact.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
