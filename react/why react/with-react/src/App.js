
import React, { useState } from "react";

function App() {
  const [ value, setValue ] = useState(0);
  return (
    <div className="App">
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
