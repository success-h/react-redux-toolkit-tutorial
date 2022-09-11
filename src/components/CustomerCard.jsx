import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFoodToCustomer, removeFood } from "../features/customerSlice";

export const CustomerCard = ({ id, name, food }) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  const dispatch = useDispatch(); // or setState

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => {
            return (
              <p onClick={() => dispatch(removeFood(index))} key={index}>
                {food}
              </p>
            );
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
