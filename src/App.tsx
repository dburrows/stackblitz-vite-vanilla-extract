import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { container } from './App.css';
import { Box } from './design_system/components/Box';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Box>

      <Box className={container} p={6} rt={10}>
        Boo!
      </Box>
      <Box backgroundColor="primaryNavy" color="white" p={6} rb={10}>
        Some text
      </Box>

      <Box display="flex">
        <Box p={2} m={2} backgroundColor="primaryOrange" flexGrow={1}>
          foo
        </Box>
        <Box p={2} m={2} backgroundColor="primaryOrange" flexGrow={1}>
          bar
        </Box>
        <Box p={2} m={2} backgroundColor="primaryOrange" flexGrow={1}>
          buzz
        </Box>
      </Box>
    </div>
  );
}

export default App;
