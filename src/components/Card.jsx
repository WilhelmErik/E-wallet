/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addSpaces } from "../utils";

export default function Card({ card, setActive, removeCard }) {
  return (
    <div className={`credit-card ${card.vendor} `}>
      <p> {card?.cardHolder || "Loading"}</p>

      <p> {card?.vendor || "Loading"}</p>
      <p> {card.cardNumber ? addSpaces(String(card.cardNumber)) : "Loading"}</p>
      <p>{card?.id || "Loading"}</p>
      <p>
        {" "}
        {card?.expireMonth}/{card?.expireYear}
      </p>
    </div>
  );
}
