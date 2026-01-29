
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveSearch } from "../features/bookingSlice";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
    const useDispatch = useDispatch();
    const navigate = useNavigate();

    cosnt [tripType, setTripType] = useState("oneway");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleSearch = () => {
        if(!source || !destination || !date || (tripType === "roundtrip" && !returnDate)) {
            alert("Please fill all required fields");
            return;
        }
       dispatch(
        saveSearch({tripType, source, destination, date, returnDate})
       );
         navigate("/flight-booking");
    };
    return (
        <div>
            <h2>Flight Search</h2>

            <select onChange={(e) => setTripType(e.target.value)}>  
                <option value="oneway">One Way</option>
                <option value="roundtrip">Round Trip</option>
            </select>

            <input
                type="text"
                placeholder="Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />
            <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            {tripType === "roundtrip" && (
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            )}
            <button onClick={handleSearch}>Search Flights</button>
        </div>
    )

};