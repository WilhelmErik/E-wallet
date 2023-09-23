/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addSpaces } from "../utils";

export default function CreditCard({ card, setActive, removeCard }) {
  return (
    <div className={`credit-card  ${card.vendor}`} onClick={!card.active &&setActive}>
      <p>{card.cardHolder}</p>
      <p>{card.vendor}</p>
      <p>{card.cardNumber}</p>
      <p>{card.id}</p>
      {!card.active && (
        <div
          onClick={removeCard}
          style={{
            zIndex: "100",
            position: "absolute",
            right: "-30px",
            top: "-10px",
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "12%",
            cursor: "pointer",
          }}
        >
          Delete
        </div>
      )}
    </div>
  );
}
