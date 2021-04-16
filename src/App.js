import React from "react";
import "./styles/App.css";
import { HashRouter as Router } from "react-router-dom";
import { Header, Main, Footer } from "./components";
import Routes from "./routes";
import useApp from "./talons/useApp";
import UserContext from "./context/UserContext";

const App = () => {
  const { user, isFinished, setIsFinished } = useApp();

  return (
    <div className="app">
      <UserContext.Provider value={{ user, isFinished, setIsFinished }}>
        <Router basename="/">
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
