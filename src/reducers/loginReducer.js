import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import horasService from "../services/horas";
import { setNotification } from "./notificationReducer";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    initPiloto(state, action) {
      return action.payload;
    },
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return action.payload;
    },
  },
});

export const initializeLogin = () => {
  return async (dispatch) => {
    const loggedPilotoJSON = window.localStorage.getItem("loggedPiloto");
    if (loggedPilotoJSON) {
      const piloto = JSON.parse(loggedPilotoJSON);
      horasService.setToken(piloto.token);
      dispatch(initPiloto(piloto));
    } else {
      dispatch(initPiloto(null));
    }
  };
};

export const loginPiloto = (data) => {
  return async (dispatch) => {
    try {
      const piloto = await loginService.login(data);
      window.localStorage.setItem("loggedPiloto", JSON.stringify(piloto));
      horasService.setToken(piloto.token);
      dispatch(login(piloto));
    } catch (error) {
      dispatch(setNotification(`${error.response.data.error}`, "danger"));
    }
  };
};

export const logoutPiloto = () => {
  return (dispatch) => {
    window.localStorage.removeItem("loggedPiloto");
    horasService.setToken(null);
    dispatch(logout(null));
  };
};

export const { login, initPiloto, logout } = loginSlice.actions;
export default loginSlice.reducer;
