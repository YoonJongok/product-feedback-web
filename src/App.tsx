import { ReactComponent as Plus } from './assets/shared/icon-arrow-left.svg';
import { Button } from '@mui/material';
import { FlexBoxColumn } from './components/FlexBox/FlexBoxcolumn';

function App() {
  return (
    <div>
      <Plus />
      <FlexBoxColumn>
        <h1>hi</h1>
        <h3>bye</h3>
      </FlexBoxColumn>
      <Button variant='containdPurple'>hi hihi</Button>
    </div>
  );
}

export default App;

