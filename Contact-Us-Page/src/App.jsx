import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Contact from "./components/ContactPage/Contact";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main_container">
        <Contact />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
