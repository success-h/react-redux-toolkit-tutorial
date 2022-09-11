import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CustomerCard } from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [resNameInput, setResNameInput] = useState("");

  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddRes = () => {
    if (!resNameInput) return;
    dispatch(addReservation(resNameInput));
    setResNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard key={index} name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={resNameInput}
              onChange={(e) => setResNameInput(e.target.value)}
            />
            <button onClick={handleAddRes}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              food={customer.food}
              name={customer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
