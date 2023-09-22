import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../Redux/userSlice";
// import { useEffect } from "react";
import { addSpaces } from "../utils";
import { setNames, removeCard, changeActive } from "../Redux/cardsSlice";
export default function Cards() {
  const userState = useSelector((state) => state.user);
  const cardsState = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  let activeCard = cardsState.find((card) => card.active);
  const inactiveCards = cardsState.filter((card) => !card.active);
  console.log(activeCard, "active card");
  return (
    <main>
      <h1>Your Cards</h1>
      <p>Active Card</p>
      <>
        <div className={`credit-card ${activeCard.vendor} `}>
          {userState.status === "Loading..." ? (
            <p>CARDHOLDER</p>
          ) : (
            <p> {activeCard?.cardHolder || "Loading"}</p>
          )}
          <p> {activeCard?.vendor || "Loading"}</p>
          <p> {activeCard.cardNumber ? addSpaces(String(activeCard.cardNumber)) : "Loading"}</p>
          <p>{activeCard?.id || "Loading"}</p>
          <p>
            {" "}
            {activeCard?.expireMonth}/{activeCard?.expireYear}
          </p>
        </div>
        <p>No</p>
        <div>
          {inactiveCards.map((card, idx) => {
            return (
              <>
                {" "}
                <div
                  key={idx}
                  className={`credit-card  ${card.vendor}`}
                  onClick={() => {
                    dispatch(changeActive(card.id));
                  }}
                >
                  <p>{card.cardHolder}</p>
                  <p>{card.vendor}</p>
                  <p>{card.cardNumber}</p>
                  <p>{card.id}</p>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeCard(card.id));
                    }}
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
                </div>
              </>
            );
          })}
        </div>
      </>
      <Link to="/newCard">
        {" "}
        <button
          disabled={cardsState.length >= 4}
          title={
            cardsState.length >= 4
              ? "Please remove a card"
              : "Add another card!"
          }
        >
          Add new card
        </button>
      </Link>{" "}
    </main>
  );
}
