import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

// Import fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faMinus, faPlus);

function App() {
  const [counter, setCounter] = useState([0]);

  return (
    <div className="container">
      <div>
        <header className="header">
          <span className="icone">
            <FontAwesomeIcon icon="stopwatch" />
          </span>
          <h1>Counter version 2</h1>
        </header>
      </div>
      <div className="addButton">
        {counter.length < 3 ? (
          <button
            className="firstAddButton"
            onClick={() => {
              const newCounter = [...counter];
              newCounter.push(0);
              setCounter(newCounter);
            }}
          >
            Add counter
          </button>
        ) : (
          <button className="addDisabled" disabled>
            Add counter
          </button>
        )}
      </div>

      <body>
        <Counter value={counter} func={setCounter}></Counter>
      </body>
      <div className="remove">
        {counter.length > 1 ? (
          <button
            onClick={() => {
              const newValue = [0];
              setCounter(newValue);
            }}
          >
            Remove all
          </button>
        ) : (
          <button className="addDisabled" disabled>
            Remove all
          </button>
        )}
      </div>

      <footer>
        <p>
          Made with <a href="https://fr.reactjs.org/">React</a> at&nbsp;
          <a href="www.lereacteur.io">&nbsp;Le Reacteur</a>
          &nbsp;by{" "}
          <a href="https://github.com/Marine-Le-Pennec">
            &nbsp;Marine Le Pennec
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
