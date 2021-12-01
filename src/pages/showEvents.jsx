import { Link } from "react-router-dom";
import { useState } from "react";
function show(props) {
  const events = props.events;
  const today = new Date();
  const [search, setSearch] = useState();

  if (events) {
    const pastEvent = events.map((event) => {
      const eventDate = event.Date;
      // console.log(props.dateRev(event.Date).getTime());

      // if (eventDate.getTime() < today.getTime()) {
      //   return (
      //     <div key={event._id} className="event">
      //       <h3>{event.Title}</h3>
      //     </div>
      //   );
      // }
    });
    const handleChange = (event) => {
      const newState = { ...search };
      newState[event.target.name] = event.target.value;
      setSearch(newState);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      return <h1>ok</h1>;
    };
    const searchForm = (
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="" />
      </form>
    );

    // const checkSearch
    return (
      <>
        {/* {searchForm} */}
        <section className="allEvents">
          <div className="events">
            {events.map((event) => {
              return (
                <div key={event._id} className="event">
                  <div>
                    <h2>
                      <span>{event.Title}</span>
                    </h2>
                    <small>
                      on:
                      <span>
                        {`${
                          event.Date
                            ? props.dateRev(event.Date)
                            : " Add date in view more"
                        }`}
                      </span>
                    </small>
                  </div>

                  <Link to={`/events/${event._id}`}>
                    view more{" "}
                    <img
                      className="view-more"
                      src="https://i.imgur.com/eFI7LVi.png"
                      alt="view more"
                    />
                  </Link>
                  <div className="line"></div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h3>{pastEvent}</h3>
        </section>
      </>
    );
  }
  return <div>loading.....</div>;
}
export default show;
