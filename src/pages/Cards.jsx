import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreditCard from "../components/CreditCard";
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
        <CreditCard card={activeCard} />

        <hr />
        <br />

        <div>
          {inactiveCards.map((card, idx) => {
            return (
              <>
                <CreditCard
                  key={card.id}
                  card={card}
                  setActive={() => {
                    dispatch(changeActive(card.id));
                  }}
                  removeCard={(e) => {
                    e.stopPropagation();
                    dispatch(removeCard(card.id));
                  }}
                />
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
      {cardsState.length >= 4 && <p>Max 4 Cards</p>}
    </main>
  );
}
