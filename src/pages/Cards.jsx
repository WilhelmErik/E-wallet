import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/userSlice";
import { useEffect } from "react";
import { setNames, removeCard, changeActive } from "../Redux/cardsSlice";
export default function Cards() {
  const userState = useSelector((state) => state.user);
  const cardsState = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    //i used short circuiting here to check if there is a name prop and then set the names for all of cards
    userState.name &&
      dispatch(setNames(`${userState.name.first} ${userState.name.last}`));
  }, [userState]);

  let activeCard = cardsState.find((card) => card.active);
  const inactiveCards = cardsState.filter((card) => !card.active);

  return (
    <main>
      <h1>E-Wallet</h1>
      <p>Active Card</p>
      <>
        <div className="credit-card">
          {userState.status === "Loading..." ? (
            <p>CARDHOLDER</p>
          ) : (
            <p> {activeCard?.cardHolder || "Loading"}</p>
          )}
          <p> {activeCard?.vendor || "Loading"}</p>
          <p> {activeCard?.cardNumber || "Loading"}</p>
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
        <button disabled={cardsState.length >= 4}>Add new card</button>
      </Link>{" "}
    </main>
  );
}
