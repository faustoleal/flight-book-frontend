import { createSlice } from "@reduxjs/toolkit";
import horasService from "../services/horas";
import { setNotification } from "./notificationReducer";

const horasSlice = createSlice({
  name: "horas",
  initialState: [],
  reducers: {
    appendHoras(state, action) {
      state.push(action.payload);
    },
    setHoras(state, action) {
      return action.payload;
    },
  },
});

export const initializeHoras = (page) => {
  return async (dispatch) => {
    const loggedPilotoJSON = window.localStorage.getItem("loggedPiloto");
    if (loggedPilotoJSON) {
      const piloto = JSON.parse(loggedPilotoJSON);
      const horas = await horasService.getAll(piloto.id, page);
      dispatch(setHoras(horas));
    } else {
      console.log({ error: "not pilot logged" });
    }
  };
};

export const createHoras = (hora) => {
  return async (dispatch) => {
    try {
      const newHora = await horasService.create(hora);
      dispatch(setNotification("Hora agregada correctamente", "success"));
      dispatch(appendHoras(newHora));
    } catch (error) {
      dispatch(setNotification(`${error.response.data.error}`, "danger"));
    }
  };
};

export const { setHoras, appendHoras } = horasSlice.actions;
export default horasSlice.reducer;
