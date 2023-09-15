import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    Vendor: "MasterCard",
    cardNumber: 123,
    cardHolder: "Test Tester",
    expireMonth: 12,
    expireYear: 2023,
    CCV: 332,
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    activeCard: {},
  },
  reducers: {},
});

export default cardsSlice.reducer;
