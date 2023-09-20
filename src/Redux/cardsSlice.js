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
    id: "02b72fe3-8bce-4816-8cf9-b81590ec5fcc",
  },
  {
    active: false,
    vendor: "Visa",
    cardNumber: 1324939023840243,
    cardHolder: "Test Tester",
    expireMonth: 12,
    expireYear: 2023,
    CCV: 332,
    id: "02b72fe3-8bce-4816-8cf9-b81590ec5f3c",
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
    createCard: (state, action) => {
      if (state.length >= 4) return;
      console.log(action.payload, " Thje payload");
      const newCard = { ...action.payload, id: crypto.randomUUID() };
      console.log(newCard, "  The new card");
      state.push(newCard);
    },
    removeCard: (state, action) => {
      console.log(action.payload, "removing beep boop");
      const cardIndex = state.findIndex((card) => card.id === action.payload);
      state.splice(cardIndex, 1);
      // state.filter((card) => card.id !== action.payload);
    },
    changeActive: (state, action) => {
      state.map((card) => {
        if (card.id === action.payload) {
          card.active = true;
        } else card.active = false;
      });
    },
  },
});

export const { setNames, createCard, removeCard, changeActive } =
  cardsSlice.actions;
export default cardsSlice.reducer;
console.log(cardsSlice, "hello");
