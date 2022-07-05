import { createContext, useState } from "react";
import "./App.css";
import FontControlBox from "./components/FontControlBox";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Modal from "./components/Modal";

const initialFormData = {
  id: "",
  pw: "",
  confirmPw: "",
};

export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
});

function App() {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FontControlBox />
      <Modal />
    </FormContext.Provider>
  );
}

export default App;
