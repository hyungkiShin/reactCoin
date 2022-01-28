import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { GlobalStyle } from "./css";

function App() {
  return (
    <>
      <GlobalStyle /> <Router />
    </>
  );
}

export default App;
