import { createSlice } from "@reduxjs/toolkit";
import avionesService from "../services/aviones";
import { setNotification } from "./notificationReducer";

const avionesSlice = createSlice({
  name: "aviones",
  initialState: [],
  reducers: {
    setAvion(state, action) {
      return action.payload;
    },
    appendAvion(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeAviones = () => {
  return async (dispatch) => {
    const aviones = await avionesService.getAll();
    dispatch(setAvion(aviones));
  };
};

export const createAvion = (avion) => {
  return async (dispatch) => {
    try {
      const newAvion = await avionesService.create(avion);
      dispatch(appendAvion(newAvion));
      dispatch(
        setNotification(`se agrego el avion ${newAvion.matricula}`, "success")
      );
    } catch (error) {
      dispatch(setNotification(`${error.response.data.error}`, "danger"));
    }
  };
};

export const { setAvion, appendAvion } = avionesSlice.actions;
export default avionesSlice.reducer;
