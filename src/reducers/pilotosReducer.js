import { createSlice } from "@reduxjs/toolkit";
import pilotosService from "../services/pilotos";
import { setNotification } from "./notificationReducer";

const pilotosSlice = createSlice({
  name: "pilotos",
  initialState: [],
  reducers: {
    setPiloto(state, action) {
      return action.payload;
    },
    appendPiloto(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializePilotos = () => {
  return async (dispatch) => {
    const pilotos = await pilotosService.getAll();
    dispatch(setPiloto(pilotos));
  };
};

export const initializePiloto = () => {
  return async (dispatch) => {
    const loggedPilotoJSON = window.localStorage.getItem("loggedPiloto");
    if (loggedPilotoJSON) {
      const pilotoLogged = JSON.parse(loggedPilotoJSON);
      const piloto = await pilotosService.getPiloto(pilotoLogged.id);
      dispatch(setPiloto(piloto));
    } else {
      console.log({ error: "not pilot logged" });
    }
  };
};

export const createPiloto = (piloto) => {
  return async (dispatch) => {
    try {
      const newPiloto = await pilotosService.create(piloto);
      dispatch(appendPiloto(newPiloto));
      dispatch(setNotification("Usuario creado correctamente", "success"));
    } catch (error) {
      dispatch(setNotification(`${error.response.data.error}`, "danger"));
    }
  };
};

export const { setPiloto, appendPiloto } = pilotosSlice.actions;
export default pilotosSlice.reducer;
