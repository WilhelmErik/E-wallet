import { Link } from "react-router-dom";
export default function AddCard() {
  return (
    <main>
      <h1>Add Card</h1>
      <h2>Hello you can add you card here </h2>
      <div
        style={{
          width: "500px",
          height: "200px",
          border: "black solid 2px",
          borderRadius: "4%",
          background: "gray",
        }}
      >
        Im a card
      </div>
      <Link to="/">
        {" "}
        <button>Abort</button>
      </Link>{" "}
    </main>
  );
}
