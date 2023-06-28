import './App.css';
import Board from './Components/Board/Board';
import { Title } from './Components/Board/Board.styled';

function App() {
  return (
    <div id="app">
      <Title >CHESS GAME FROM SCRATCH</Title>
      <Board/>
    </div>
  );
}

export default App;
