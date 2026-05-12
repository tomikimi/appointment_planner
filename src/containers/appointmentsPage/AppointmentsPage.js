import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contact,
  appointMents,
  handleAddAppointMents,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [myContact, setMyContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (name && date && time) {
      handleAddAppointMents(name, myContact, date, time);
      setMyContact("");
      setName("");
      setDate("");
      setTime("");
    } else {
      window.alert("One or more fields are empty");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contact}
          title={name}
          contact={myContact}
          date={date}
          time={time}
          setTitle={setName}
          setContact={setMyContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        ></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointMents}></TileList>
      </section>
    </div>
  );
};
