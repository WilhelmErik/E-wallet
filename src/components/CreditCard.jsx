/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addSpaces } from "../utils";

export default function CreditCard({ card, setActive, removeCard }) {
  return (
    <div className="card-container">
     

      <div className={card.active && "card"}>
        <div
          className={` credit-card card-front ${card.vendor}`}
          onClick={!card.active ? setActive : undefined}
        >
          <img
            src={`./assets/Chip.png`}
            alt=""
            className={`card-chip ${card.vendor}`}
            title={`vendor-logo ${card.vendor}`}
          />
          <img
            src={`./assets/logos/${card.vendor}.png`}
            alt=""
            className={`vendor-logo ${card.vendor}`}
            title={`vendor-logo ${card.vendor}`}
          />

          <p className="card-number">{addSpaces(card.cardNumber)}</p>
          <p className="card-holder">{card.cardHolder}</p>
          <p className="expiration-date">
            {card.expireMonth}/{card.expireYear}
          </p>

          {!card.active && (
            <div className="removal-button" onClick={removeCard}>
              Delete
            </div>
          )}
        </div>
        <div className="credit-card card-back">
          <p>{card.CCV}</p>
          card back
        </div>
      </div>
    </div>
  );
}
