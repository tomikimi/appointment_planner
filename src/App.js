import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointMents, setAppointMents] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function handleAddContact(name, phoneNumber, email) {
    const contactDetail = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    setContacts((currContact) => [...currContact, contactDetail]);
  }

  function handleAddAppointMents(name, contact, date, time) {
    const appointMentDetail = {
      name: name,
      contact: contact,
      dateOfAppointment: date,
      timeOfAppointment: time,
    };

    setAppointMents((currAppointMent) => [
      ...currAppointMent,
      appointMentDetail,
    ]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              handleAddContact={handleAddContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              contact={contacts}
              appointMents={appointMents}
              handleAddAppointMents={handleAddAppointMents}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
