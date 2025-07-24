import LoginForm from "../form/LoginForm";
import Notification from "../layout/Notification";

const LoginPage = () => {
  return (
    <main className="log-page">
      <section className="log-title">
        <h1>Bienvenido a FlightBook</h1>
        <h3>Inicia sesion para comenzar anotar tus horas de vuelos</h3>
      </section>
      <section className="log-form">
        <Notification />
        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;
