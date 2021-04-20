// eslint-disable-next-line no-use-before-define
import React, { useEffect } from "react";

import Stage from "./containers/Stage";
import "./App.css";

function App() {
  // const [count, setCount] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-primary", "#108ee9");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Stage />
      </header>
    </div>
  );
}

export default App;
