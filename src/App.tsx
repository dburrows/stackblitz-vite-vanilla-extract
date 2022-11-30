import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { container } from './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className={container}>Boo!</div>
    </div>
  );
}

export default App;
