import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleName = (e) => {
    setTitle(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label name="title" htmlFor="title">
            Title
          </label>
          <input name="title" type="text" value={title} onChange={handleName} />
        </div>

        <div>
          <label name="appointmentDate" htmlFor="appointmentDate">
            Date of Appointment
          </label>
          <input
            name="appointmentDate"
            type="date"
            minLength={getTodayString}
            value={date}
            onChange={handleDate}
          />
        </div>
        <div>
          <label name="appointmentTime" htmlFor="appointmentTime">
            Time of Appointment
          </label>
          <input
            name="appointmentTime"
            type="time"
            value={time}
            onChange={handleTime}
          />
        </div>
        <ContactPicker
          contacts={contacts}
          value={contact}
          name="contact"
          handleContact={handleContact}
        ></ContactPicker>
        <button>Submit</button>
      </form>
    </>
  );
};
