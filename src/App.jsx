import AppRoutes from "./AppRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeLogin } from "./reducers/loginReducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLogin());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
