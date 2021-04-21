// eslint-disable-next-line no-use-before-define
import React, { useEffect } from "react";

import Stage from "./containers/Stage";
import Scene from "./containers/Scene";
import "./App.css";

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-primary", "#108ee9");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Stage />
        <Scene />
      </header>
    </div>
  );
}

export default App;
