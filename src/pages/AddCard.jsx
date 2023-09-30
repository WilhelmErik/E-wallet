import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useReducer, useState } from "react";
import { createCard } from "../Redux/cardsSlice";
import { addSpaces, isInvalidInput } from "../utils";
import CreditCard from "../components/CreditCard";

//--
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
//--
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
    expireYear: "23",
    CCV: "",
  };
  function cardFormReducer(state, action) {
    switch (action.type) {
      case "FieldSet":
        return { ...state, [action.field]: action.payload };
    }
  }

  const [cardState, dispatch] = useReducer(cardFormReducer, initialState);

  let displayedCCNumber = addSpaces(String(cardState.cardNumber));

  //-----------------------Functions ------------------------

  function submitCard(e) {
    e.preventDefault();

    if (cardState.cardNumber.length === 16) {
      setCredNumErr(false);
      reduxDispatch(createCard({ ...cardState, active: false }));
      navigate("/success");
    } else {
      setCredNumErr(true);
      alert("that aint right sir ");
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
  const turnCard = document.querySelector(".card-container .card");

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

  const [credNumErr, setCredNumErr] = useState(false);
  //-------------------------__------------------------
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <div>
        </div>
        <h1>Add Card</h1>
        <CreditCard
          card={{
            ...cardState,
            active: true,
            cardHolder: cardHolderName,
          }}
        />
   
        <form onSubmit={submitCard}>
          <TextField
            disabled
            id=""
            label={"Cardholder"}
            value={cardHolderName}
          />
          <br />
          <TextField
            error={credNumErr}
            style={{ margin: "10px" }}
            inputProps={{ maxLength: "19" }}
            required
            id="standard-basic"
            placeholder="**** **** **** ****"
            label="Cardnumber"
            variant="outlined"
            color="secondary"
            value={displayedCCNumber}
            onChange={(e) => handleCCNumChange(e)}
          />
       
          <br />
          <FormControl sx={{ m: 1, width: 224 }}>
            <InputLabel id="demo-simple-select-helper-label">Vendor</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={cardState.vendor}
              label="Vendor"
              onChange={(e) => {
                dispatch({
                  type: "FieldSet",
                  field: "vendor",
                  payload: e.target.value,
                });
              }}
            >
              <MenuItem value={"Mastercard"}>Mastercard</MenuItem>
              <MenuItem value={"Visa"}>Visa</MenuItem>
              <MenuItem value={"AmericanExpress"}>American Express</MenuItem>
            </Select>
            <FormHelperText>Credit card vendor</FormHelperText>
          </FormControl>
          <br />

          <FormControl sx={{ m: 1, width: 80 }}>
            <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={cardState.expireMonth}
              label="Month"
              onChange={(e) => {
                dispatch({
                  type: "FieldSet",
                  field: "expireMonth",
                  payload: e.target.value,
                });
              }}
            >
              <MenuItem value="01">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">03</MenuItem>
              <MenuItem value="04">04</MenuItem>
              <MenuItem value="05">05</MenuItem>
              <MenuItem value="06">06</MenuItem>
              <MenuItem value="07">07</MenuItem>
              <MenuItem value="08">08</MenuItem>
              <MenuItem value="09">09</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, width: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">year</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={cardState.expireYear}
              label="Expiration year"
              onChange={(e) => {
                dispatch({
                  type: "FieldSet",
                  field: "expireYear",
                  payload: e.target.value,
                });
              }}
            >
              <MenuItem value="23">2023</MenuItem>
              <MenuItem value="24">2024</MenuItem>
              <MenuItem value="25">2025</MenuItem>
              <MenuItem value="26">2026</MenuItem>
              <MenuItem value="27">2027</MenuItem>
              <MenuItem value="28">2028</MenuItem>
              <MenuItem value="29">2029</MenuItem>
              <MenuItem value="30">2030</MenuItem>
              <MenuItem value="31">2031</MenuItem>
              <MenuItem value="32">2032</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            inputProps={{ maxLength: "3", minLength: "3" }}
            required
            id="standard-basic"
            placeholder="***"
            label="CCV"
            variant="outlined"
            color="secondary"
            value={cardState.CCV}
            onFocus={() => turnCard.classList.add("rotated")}
            onBlur={() => turnCard.classList.remove("rotated")}
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
          <br />
        
            <Button
              variant="outlined"
              type="submit"
              color="success"
              style={{ margin: "1em" }}
            >
              Create Card!
            </Button>
        </form>
        <Link to="/" title="Back to Homepage">
          {" "}
          <Button variant="outlined" color="error" style={{ width: "140px" }} size="large">
            Abort
          </Button>
        </Link>{" "}
      </main>
    </ThemeProvider>
  );
}
