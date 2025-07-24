import CreateAccount from "../form/CreateAccount";
import Notification from "../layout/Notification";

const CreatePage = () => {
  return (
    <main className="log-page">
      <section className="log-title">
        <h1>Crear Cuenta</h1>
        <h3>Para poder comenzar a explorar FlightBook deberas registrarte</h3>
      </section>
      <section className="log-form">
        <Notification />
        <CreateAccount />
      </section>
    </main>
  );
};

export default CreatePage;
