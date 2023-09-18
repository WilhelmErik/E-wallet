import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    active: true,
    vendor: "MasterCard",
    cardNumber: 123,
    cardHolder: "Test Tester",
    expireMonth: 12,
    expireYear: 2023,
    CCV: 332,
  },
  {
    active: false,
    vendor: "MasterCard",
    cardNumber: 123,
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
});

export const { setNames } = cardsSlice.actions;
export default cardsSlice.reducer;
console.log(cardsSlice, "hello");
