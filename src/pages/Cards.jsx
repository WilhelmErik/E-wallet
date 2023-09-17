import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/userSlice";
import { useEffect } from "react";
export default function Cards() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    console.log(state, " this is kinda weird");
  }, []);

  return (
    <main>
      <h1>E-Wallet</h1>
      <p>Active Card</p>
      {state.status !== "Loading..." ? (
        <>
          <p>{state.name.first}</p>
          <p>{state.name.last}</p>
        </>
      ) : (
        <p>Loading</p>
      )}

      <p>No</p>
      <div
        style={{
          width: "500px",
          height: "200px",
          border: "black solid 2px",
          borderRadius: "4%",
          background: "slateblue",
        }}
      >
        Im a card
      </div>

      <button>
        <Link to="/newCard">Add new card</Link>{" "}
      </button>
    </main>
  );
}
