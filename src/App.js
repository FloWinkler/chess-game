import './App.css';
import Board from './Components/Board/Board';
import { Title } from './Components/Board/Board.styled';

function App() {
  return (<>
    <Title >CHESS GAME FROM SCTRATCH</Title>
    <div id="app">
      <Board/>
    </div>
    </>
  );
}

export default App;
