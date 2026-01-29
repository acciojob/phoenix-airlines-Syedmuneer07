import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePassenger, confirmBooking } from "../features/bookingSlice";
import { useNavigate } from "react-router-dom";

const FlightBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = () => {
    if (!name || !email.includes("@") || phone.length !== 10) {
      setError("Invalid input");
      return;
    }

    dispatch(savePassenger({ name, email, phone }));
    dispatch(confirmBooking());
    navigate("/confirmation");

  };
  return (
    <div className="flight-booking">
      <h2>Book Your Flight</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;