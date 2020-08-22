import React from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "./Body";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Body className="App-body" />
      </div>
    </BrowserRouter>
  );
}

export default App;
