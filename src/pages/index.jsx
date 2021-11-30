import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function index(props) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const events = props.events;
  const [editForm, setEditForm] = useState({});
  const [showForm, setShowForm] = useState();
  useEffect(() => {
    if (events) {
      const event = events.find((e) => e._id === id);
      setEditForm(event);
    }
  }, [events]);

  if (events) {
    const oneEvent = events.find((e) => e._id === id);

    const handleChange = (event) => {
      const newState = { ...editForm };
      newState[event.target.name] = event.target.value;
      setEditForm(newState);
      console.log(newState);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateEvent(editForm, oneEvent._id);

      navigate("/");
    };
    const form = (
      <form onSubmit={handleSubmit}>
        <lable htmlFor="name of event">
          <input
            type="text"
            value={editForm.Title}
            name="Title"
            onChange={handleChange}
          />
        </lable>
        <lable htmlFor="subtitle of event">
          <input
            type="text"
            value={editForm.subTitle}
            name="subTitle"
            onChange={handleChange}
          />
        </lable>

        <lable htmlFor="date of event">
          <input
            type="date"
            value={editForm.Date}
            name="Date"
            onChange={handleChange}
          />
        </lable>
        <lable htmlFor="type of event">
          <select name="Type" onChange={handleChange}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Appointment">Appointment</option>
          </select>
        </lable>
        <lable htmlFor="Description of event">
          <input
            type="text"
            value={editForm.Description}
            name="Description"
            onChange={handleChange}
            placeholder="Description"
          />
        </lable>

        <input type="submit" value="update event" className="submit" />
      </form>
    );
    const showToggle = () => {
      setShowForm(!showForm);
    };
    const deleteEvent = () => {
      props.deleteEvent(oneEvent._id);

      navigate("/");
    };
    return (
      <div className="showpage">
        <section className="show">
          <h2>
            You have{" "}
            <span>
              {oneEvent.Title}
              <br />
              <small>{oneEvent.subTitle}</small>
            </span>
          </h2>

          <h3>
            on:{" "}
            <span>{`${
              oneEvent.Date
                ? props.dateRev(oneEvent.Date)
                : "Edit your event and enter a date"
            }`}</span>
          </h3>
          <section>
            <button onClick={showToggle}>edit</button>
            <button onClick={deleteEvent}>delete</button>
          </section>
          <h3>type: {oneEvent.Type}</h3>
          <p>{oneEvent.Description}</p>
        </section>

        <section className={`form ${showForm ? "showForm" : ""}`}>
          {form}
        </section>
      </div>
    );
  }
  return <h1>This is index</h1>;
}
export default index;
