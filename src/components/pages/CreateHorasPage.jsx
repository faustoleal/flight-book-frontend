import HorasForm from "../form/HorasForm";
import HorasFormParaPython from "../form/HoraFormParaPython";
import NavigationBar from "../layout/NavigationBar";
import Footer from "../layout/Footer";
import Notification from "../layout/Notification";

const CreateHorasPage = () => {
  return (
    <div className="create-horas-page">
      <NavigationBar />
      <Notification />
      <HorasFormParaPython />
      {/* <HorasForm /> */}
      <Footer />
    </div>
  );
};

export default CreateHorasPage;
