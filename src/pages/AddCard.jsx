import { Link } from "react-router-dom";
export default function AddCard() {
  return (
    <main>
      <h1>Add Card</h1>
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
        Im a card
      </div>

      <button>
        <Link to="/">Abort</Link>{" "}
      </button>
    </main>
  );
}