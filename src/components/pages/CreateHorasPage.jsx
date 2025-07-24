import HorasForm from "../form/HorasForm";
import NavigationBar from "../layout/NavigationBar";
import Footer from "../layout/Footer";
import Notification from "../layout/Notification";

const CreateHorasPage = () => {
  return (
    <div className="create-horas-page">
      <NavigationBar />
      <Notification />
      <HorasForm />
      <Footer />
    </div>
  );
};

export default CreateHorasPage;
