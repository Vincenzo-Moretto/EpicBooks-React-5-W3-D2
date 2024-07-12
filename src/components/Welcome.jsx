import Alert from "react-bootstrap/Alert";

function Welcome({ darkMode }) {
  return (
    <>
      <h1 className={`mt-5 text-center ${darkMode ? "text-dark" : "text-white"}`}>EPICBOOKS</h1>
      <Alert key="success" variant="success">
        This is a success alert—check it out!
      </Alert>
    </>
  );
}

export default Welcome;
