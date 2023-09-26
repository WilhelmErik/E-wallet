import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    active: true,
    vendor: "Visa",
    cardNumber: "3141592653589793",
    cardHolder: "Test Tester",
    expireMonth: 13,
    expireYear: 37,
    CCV: 666,
    id: "02b72fe3-8bce-4816-8cf9-b81590ec5fcc",
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
      const newCard = { ...action.payload, id: crypto.randomUUID() };
      state.push(newCard);
    },
    removeCard: (state, action) => {
      const cardIndex = state.findIndex((card) => card.id === action.payload);
      if (!state[cardIndex].active) state.splice(cardIndex, 1);
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
