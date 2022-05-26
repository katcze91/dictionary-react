import React from "react";
import Dictionary from "./Dictionary"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>hello</h1>
          <a href="#" className="btn btn-primary">
            {" "}
            Hello
          </a>
        </header>
        <main>
          < Dictionary/>
        </main>
        <footer>Coded by Katarzyna Czepiela</footer>
      </div>
    </div>
  );
}

export default App;
