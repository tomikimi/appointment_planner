import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleName = (e) => {
    const contactName = e.target.value;
    setName(contactName);
  };
  const handleEmail = (e) => {
    const contactEmail = e.target.value;
    setEmail(contactEmail);
  };
  const handlePhoneNumber = (e) => {
    const contactPhoneNumber = e.target.value;
    setPhone(contactPhoneNumber);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label name="name" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>
        <div>
          <label name="email" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label name="phoneNumber" htmlFor="phoneNumber">
            PhoneNumber
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={phone}
            onChange={handlePhoneNumber}
          />
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
