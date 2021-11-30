import { useNavigate } from "react-router-dom";
import { useState } from "react";
function create(props) {
  const [newForm, setNewForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
    setNewForm(newState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createEvent(newForm);

    navigate("/");
  };
  const form = (
    <form onSubmit={handleSubmit}>
      <lable htmlFor="name of event">
        <input
          type="text"
          placeholder="whats the event?"
          name="Title"
          onChange={handleChange}
        />
      </lable>
      <lable htmlFor="subtitle of event">
        <input
          type="text"
          placeholder="who's the event for or with?"
          name="subTitle"
          onChange={handleChange}
        />
      </lable>

      <lable htmlFor="date of event">
        <input type="date" name="Date" onChange={handleChange} />
      </lable>
      <lable htmlFor="type of event">
        <select name="Type" onChange={handleChange}>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Appointment">Appointment</option>
        </select>
      </lable>
      <lable htmlFor="Description">
        <textarea
          // cols="50"
          for="Description"
          value={newForm.Description}
          placeholder="description of the event"
          name="Description"
          onChange={handleChange}
        ></textarea>
      </lable>

      <input type="submit" value="create event" className="submit" />
    </form>
  );
  return <section className="forms">{form}</section>;
}
export default create;
