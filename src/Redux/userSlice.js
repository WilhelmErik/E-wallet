import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const USER_API = "https://randomuser.me/api/";

export const getUser = createAsyncThunk("userSlice/getUser", async () => {
  const res = await axios.get(USER_API);
  console.log(res.data.results[0].name);
  console.log(res.data);
  return res.data.results[0].name;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {},
    status: null,
  },
  reducers: {
   
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading...";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "Success !!";
      state.name = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed :( !";
    },
  },
});

export default userSlice.reducer;
