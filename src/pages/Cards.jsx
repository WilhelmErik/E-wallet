import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/userSlice";
import { useEffect } from "react";
import { setNames } from "../Redux/cardsSlice";
export default function Cards() {
  const userState = useSelector((state) => state.user);
  const cardsState = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    console.log(userState, " this is kinda weird");
  }, []);

  useEffect(() => {
    //i used short circuiting here to check if there is a name prop and then set the names for all of cards
    userState.name &&
      dispatch(setNames(`${userState.name.first} ${userState.name.last}`));
  }, [userState]);

  console.log(cardsState[0]);

  let activeCard = cardsState.find((card) => card.active);
  const inactiveCards = cardsState.filter((card) => !card.active);
  console.log(inactiveCards, " Inactive cards");

  return (
    <main>
      <h1>E-Wallet</h1>
      <p>Active Card</p>
      <div
        style={{
          width: "500px",
          height: "200px",
          border: "black solid 2px",
          borderRadius: "4%",
          background: "slateblue",
        }}
      >
        {userState.status === "Loading..." ? (
          <p>Loading</p>
        ) : (
          <p> {activeCard.cardHolder}</p>
        )}
      </div>
      <p>No</p>
      <div>
        {inactiveCards.map((card, idx) => {
          return (
            <div key={idx}>
              <p>Hello</p>
              <p>{card.cardHolder}</p>
            </div>
          );
        })}
      </div>
      <Link to="/newCard">
        {" "}
        <button>Add new card</button>
      </Link>{" "}
    </main>
  );
}
