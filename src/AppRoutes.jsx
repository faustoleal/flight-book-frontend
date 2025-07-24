import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import CreatePage from "./components/pages/CreatePage";
import CreateHorasPage from "./components/pages/CreateHorasPage";
import InicioPage from "./components/pages/InicioPage";
import LibroPage from "./components/pages/LibroPage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const login = useSelector((state) => state.login);

  return (
    <Routes>
      <Route
        path="/"
        element={login ? <InicioPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={login ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="/create-account" element={<CreatePage />} />
      <Route path="/libro-vuelo" element={<LibroPage />} />
      <Route path="/libro-vuelo/agregar-hora" element={<CreateHorasPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
