import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useReducer } from "react";
import { createCard } from "../Redux/cardsSlice";

export default function AddCard() {
  const reduxDispatch = useDispatch();
  const cardHolderName = useSelector((state) => state.cards[0].cardHolder);
  const initialState = {
    cardHolder: cardHolderName,
    cardNumber: "",
    vendor: "",
    expireMonth: 1,
    expireYear: 2023,
    CCV: null,
  };
  function cardFormReducer(state, action) {
    switch (action.type) {
      case "FieldSet":
        return { ...state, [action.field]: action.payload };
    }
  }

  // const [cardInput, setCardInput] = useState({});

  const [cardState, dispatch] = useReducer(cardFormReducer, initialState);

  function addSpaces(arg) {
    let spaced = [...arg]
      .map((e, i) => (i % 4 === 0 && i != 0 ? " " + e : e))
      .join("");
    return spaced;
  }
  let displayedCCNumber = addSpaces(String(cardState.cardNumber));

  console.log(cardHolderName);
  const isNumber = (input) => {
    return isNaN(Number(input)) && input !== "Backspace";
  };

  const handleCCNumChange = (e) => {
    e.preventDefault();
    console.log(cardState.cardNumber, "The current number");
    const keyInput = e.nativeEvent.data;
    console.log(isNaN(Number(keyInput)), "  lets see ");
    console.log(keyInput, "current key inpout");
    if (
      (isNaN(Number(keyInput)) && keyInput !== "Backspace") ||
      keyInput === " "
    )
      return;

    console.log("Cant be NaN : ", keyInput);
    console.log(addSpaces(e.target.value), "the displayed one");
    console.log(e.target.value, "before number");
    console.log(Number(e.target.value.replace(" ", "")), "after number");
    const trimmedNum = Number(e.target.value.replace(/ /g, ""));
    dispatch({
      type: "FieldSet",
      field: "cardNumber",
      payload: trimmedNum,
    });

    // cardState.cardNumber + keyInput
  };

  const submitCard = () => {
    reduxDispatch(createCard(cardState));
  };

  return (
    <main>
      <h1>Add Card</h1>
      <h2>Hello you can add you card here </h2>
      <div className="credit-card">
        Im a card
        <p>{cardState.cardNumber}</p>
      </div>
      <form onSubmit={submitCard}>
        <label htmlFor="firstName">
          Card Holder
          <input value={cardHolderName} disabled />
        </label>
        <br />
        <label htmlFor="">
          Card Number
          <input
            type="text"
            minLength={16}
            maxLength={19}
            name="cardNumber"
            value={displayedCCNumber}
            onChange={(e) => handleCCNumChange(e)}
          />
        </label>
        <br />
        Vendor:
        <select name="vendor" id="">
          <option value="">MasterCard</option>
          <option value="">Visa</option>
          <option value="">American Express</option>
        </select>
        <br />
        Expiration
        <select name="expireMonth" id="">
          <option value="">01</option>
          <option value="">02</option>
          <option value="">03</option>
          <option value="">04</option>
          <option value="">05</option>
          <option value="">06</option>
          <option value="">07</option>
          <option value="">08</option>
          <option value="">09</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
        </select>
        <select name="expireYear" id="">
          <option value="">2023</option>
          <option value="">2024</option>
          <option value="">2025</option>
          <option value="">2026</option>
          <option value="">2027</option>
          <option value="">2028</option>
          <option value="">2029</option>
          <option value="">2030</option>
          <option value="">2031</option>
          <option value="">2032</option>
        </select>
        <br />
        <label htmlFor="lastName">
          CCV
          <input placeholder="CCV" required minLength={3} maxLength={3} />
        </label>
        <br />
        <button>Create Card!</button>
      </form>
      <Link to="/">
        {" "}
        <button>Abort</button>
      </Link>{" "}
    </main>
  );
}
