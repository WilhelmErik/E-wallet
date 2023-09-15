import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("userSlice/getUser",
async () =>{
    
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {},
});

export default userSlice.reducer;
