import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Phoenix Airlines</h1>
      <Link to="/flights-search">
        <button>Book Flights</button>
      </Link>
    </div>
  );
};
export default Landing;

