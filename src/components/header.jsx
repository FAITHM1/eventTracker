import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">
        <img src="https://i.imgur.com/aY99Ugl.png" alt="image of a calender" />
      </Link>
      <nav className="nav">
        <Link to="/">
          <div>Events</div>
        </Link>
        <Link to="/event/create">
          <div>Add</div>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
