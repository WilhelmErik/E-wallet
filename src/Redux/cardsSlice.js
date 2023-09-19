import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    active: true,
    vendor: "Visa",
    cardNumber: 1324939023840243,
    cardHolder: "Test Tester",
    expireMonth: 12,
    expireYear: 2023,
    CCV: 332,
  },
  {
    active: false,
    vendor: "MasterCard",
    cardNumber: 3233424251415155,
    cardHolder: "Test Tester",
    expireMonth: 12,
    expireYear: 2023,
    CCV: 332,
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setNames: (state, action) => {
      state.map((card) => {
        card.cardHolder = action.payload.toUpperCase();
      });
    },
  },
  createCard: (state, action) => {
    if (state.length >= 4) return;
  },
});

export const { setNames, createCard } = cardsSlice.actions;
export default cardsSlice.reducer;
console.log(cardsSlice, "hello");
