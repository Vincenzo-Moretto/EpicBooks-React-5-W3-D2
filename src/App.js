import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("darkMode");
  };

  return (
    <>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} toggleDarkMode={toggleDarkMode} />
      <Container>
        <Welcome darkMode={darkMode} />
        <AllTheBooks searchQuery={searchQuery} darkMode={darkMode} />
      </Container>
      <MyFooter bloccato="fixed" />
    </>
  );
}

export default App;
