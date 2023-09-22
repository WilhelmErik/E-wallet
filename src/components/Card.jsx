import { useDispatch, useSelector } from "react-redux";
import { addSpaces } from "../utils";

export default function Card({ card }) {
  return (
    <div className={`credit-card ${activeCard.vendor} `}>
      <p> {activeCard?.cardHolder || "Loading"}</p>

      <p> {activeCard?.vendor || "Loading"}</p>
      <p>
        {" "}
        {activeCard.cardNumber
          ? addSpaces(String(activeCard.cardNumber))
          : "Loading"}
      </p>
      <p>{activeCard?.id || "Loading"}</p>
      <p>
        {" "}
        {activeCard?.expireMonth}/{activeCard?.expireYear}
      </p>
    </div>
  );
}
