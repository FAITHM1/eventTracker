import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/index";
import Show from "../pages/showEvents";
import Create from "../pages/create";
function Body() {
  const [events, setEvents] = useState(null);
  //api
  const URL = "https://fmeventbackend.herokuapp.com/events/";
  const getEvents = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setEvents(data);
  };
  const createEvent = async (event) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    getEvents();
  };

  const updateEvent = async (event, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    getEvents();
  };

  const deleteEvent = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getEvents();
  };
  const dateRev = (date) => {
    const removeTime = date.slice(0, 10).split("-").reverse().join("/");
    return removeTime;
  };
  useEffect(() => getEvents(), []);
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <Show events={events} createEvent={createEvent} dateRev={dateRev} />
          }
        />
        <Route
          path="/events/:id"
          element={
            <Index
              events={events}
              updateEvent={updateEvent}
              deleteEvent={deleteEvent}
              dateRev={dateRev}
            />
          }
        />
        <Route
          path="/event/create"
          element={<Create createEvent={createEvent} />}
        />
      </Routes>
    </main>
  );
}
export default Body;
