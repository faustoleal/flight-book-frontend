import { createSlice } from "@reduxjs/toolkit";
import horasService from "../services/horas";

const totalesSlice = createSlice({
  name: "totales",
  initialState: null,
  reducers: {
    setTotales(state, action) {
      return action.payload;
    },
  },
});

export const initializeTotales = () => {
  return async (dispatch) => {
    const loggedPilotoJSON = window.localStorage.getItem("loggedPiloto");
    if (loggedPilotoJSON) {
      const piloto = JSON.parse(loggedPilotoJSON);
      const totales = await horasService.getTotales(piloto.id);
      dispatch(setTotales(totales));
    } else {
      console.log({ error: "not pilot logged" });
    }
  };
};

export const { setTotales } = totalesSlice.actions;
export default totalesSlice.reducer;
