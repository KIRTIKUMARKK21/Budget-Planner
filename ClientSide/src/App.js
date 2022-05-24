import React from "react";
import "./App.css";
import Routes from "./routes";
import Header from "./components/Header";
import AuthContext from "./context/AuthContext";

function App() {
const [auth, setAuth] = React.useState({
  username:"Racoon",
  email:"racoon@racoon.com"
});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
    <React.Fragment>
      <Routes />
    </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;
