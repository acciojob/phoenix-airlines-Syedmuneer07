import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const confirmation=() => {
    const navigate = useNavigate();
    const booking = useSelector((state) => state.booking.confirmation);


    if(!booking) return null;
    return(
        <div>
        <h2>Booking Confirmed</h2>
        <p>Name: {booking.name}</p>
        <p>Route : {booking.source} to {booking.destination}</p>
         <p>Status: {booking.status}</p>

         <button onClick={() => navigate("/")}>Home</button>
        </div>
    );
}

export default confirmation;
