import { useState } from 'react';
import { ReactComponent as Plus } from './assets/shared/icon-arrow-left.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Plus />
    </div>
  );
}

export default App;

