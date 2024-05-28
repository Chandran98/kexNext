import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchList = createAsyncThunk("fetchList", async () => {
  console.log("adfsfdas");
  const res = await axios.get(
    "https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list"
  );
  const response = await res.data;
  console.log(response);
  return response;
});

export const marketDepth = createAsyncThunk("marketDepth", async (data) => {
  const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
    transports: ["websocket"],
  });
  socket.emit("joinRoom", { message: data });

  socket.on("buy_order", (data) => {
    if (data && data.status) {
      const buyOrders = data.data.filter((order) => order.type === "buy");
    }
  });
  return buyOrders;
});

const cryptoSlice = createSlice({
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  name: "crypto",
  extraReducers: (builders) => {
    builders
      .addCase(fetchList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(marketDepth.pending, (state) => {
        state.loading = true;
      })
      .addCase(marketDepth.fulfilled, (state) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(marketDepth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
