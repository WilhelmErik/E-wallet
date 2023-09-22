import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { createCard } from "../Redux/cardsSlice";
import { addSpaces, isInvalidInput, isNumber } from "../utils";

export default function AddCard() {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user.name);
  const cardHolderName = (userState.first + " " + userState.last).toUpperCase();
  const initialState = {
    cardHolder: cardHolderName,
    cardNumber: "",
    vendor: "Mastercard",
    expireMonth: "01",
    expireYear: "2023",
    CCV: "",
  };
  function cardFormReducer(state, action) {
    switch (action.type) {
      case "FieldSet":
        return { ...state, [action.field]: action.payload };
    }
  }

  // const [cardInput, setCardInput] = useState({});

  const [cardState, dispatch] = useReducer(cardFormReducer, initialState);

  let displayedCCNumber = addSpaces(String(cardState.cardNumber));

  //-----------------------Functions ------------------------

  function submitCard(e) {
    e.preventDefault();
    if (cardState.cardNumber.length === 16) {
      reduxDispatch(createCard(cardState));
      navigate("/success");
    }
  }
  // function isInvalidInput(keyInput) {
  //   return (
  //     (!isNumber(keyInput) && keyInput !== "Backspace") || keyInput === " "
  //   );
  // }
  // function isNumber(input) {
  //   return !isNaN(Number(input));
  // }
  // function addSpaces(arg) {
  //   let spaced = [...arg]
  //     .map((e, i) => (i % 4 === 0 && i !== 0 ? " " + e : e))
  //     .join("");
  //   return spaced;
  // }
  const handleCCNumChange = (e) => {
    const keyInput = e.nativeEvent.data;
    console.log("Is invalid? ", isInvalidInput(keyInput));
    if (isInvalidInput(keyInput)) return;
    const trimmedNum = e.target.value.replace(/ /g, "");
    dispatch({
      type: "FieldSet",
      field: "cardNumber",
      payload: trimmedNum,
    });
  };

  //-------------------------__------------------------
  return (
    <main>
      <h1>Add Card</h1>
      <h2>Hello you can add you card here </h2>
      <div className={`credit-card ${cardState.vendor} `}>
        Im a card
        <p>{displayedCCNumber}</p>
      </div>
      <form onSubmit={submitCard}>
        <label htmlFor="firstName">
          Card Holder
          <input value={cardHolderName} disabled name="cardHolder" />
        </label>
        <br />
        <label htmlFor="">
          Card Number
          <input
            type="text"
            minLength={19}
            maxLength={19}
            name="cardNumber"
            value={displayedCCNumber}
            onChange={(e) => handleCCNumChange(e)}
          />
        </label>
        <br />
        Vendor:
        <select
          name="vendor"
          id=""
          value={cardState.vendor}
          onChange={(e) => {
            dispatch({
              type: "FieldSet",
              field: "vendor",
              payload: e.target.value,
            });
          }}
        >
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="AmericanExpress">American Express</option>
        </select>
        <br />
        Expiration
        <select
          name="expireMonth"
          id=""
          value={cardState.expireMonth || "01"}
          onChange={(e) => {
            dispatch({
              type: "FieldSet",
              field: "expireMonth",
              payload: e.target.value,
            });
          }}
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select
          name="expireYear"
          id=""
          value={cardState.expireYear || "2023"}
          onChange={(e) => {
            dispatch({
              type: "FieldSet",
              field: "expireYear",
              payload: e.target.value,
            });
          }}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
          <option value="2031">2031</option>
          <option value="2032">2032</option>
        </select>
        <br />
        <label>
          CCV
          <input
            type="text"
            name="CCV"
            placeholder="CCV"
            required
            minLength={3}
            maxLength={3}
            value={cardState.CCV}
            onChange={(e) => {
              const keyInput = e.nativeEvent.data;
              if (isInvalidInput(keyInput)) return;
              dispatch({
                type: "FieldSet",
                field: "CCV",
                payload: e.target.value,
              });
            }}
          />
        </label>
        <br />
        <button>Create Card!</button>
      </form>
      <Link to="/" title="Back to Homepage">
        {" "}
        <button>Abort</button>
      </Link>{" "}
    </main>
  );
}
