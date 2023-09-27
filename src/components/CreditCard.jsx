/* eslint-disable react/prop-types */
// import { useDispatch, useSelector } from "react-redux";
import { addSpaces } from "../utils";
import Button from "@mui/material/Button";

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

          <p className="card-number">
            {addSpaces(card.cardNumber) || "**** **** **** ****"}
          </p>
          <p className="card-holder">{card.cardHolder}</p>
          <div className="expiration-date">
            <p>
              <span className="valid-thru">{"Valid Thru>"}</span>
              {card.expireMonth}/{card.expireYear}
            </p>
          </div>

          {!card.active && (
            <div className="removal-button" onClick={removeCard}>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="credit-card card-back">
          <div className="barcode"></div>
          <div className="CCV-div">
            <p>{card.CCV}</p>
          </div>
          <p className="backside-lorem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            repudiandae sint assumenda aliquid illo nobis, numquam architecto
            optio illum fugiat ea exercitationem maiores!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
