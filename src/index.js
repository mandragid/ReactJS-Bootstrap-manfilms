import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavBar";
import Main from "./components/Main";
import Dua from "./components/Dua";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="NavBar">
      <NavigationBar />
      <Main />
    </div>
    <Dua />
  </React.StrictMode>
);
