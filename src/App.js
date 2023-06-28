import './App.css';
import Board from './Components/Board/Board';
import { Title } from './Components/Board/Board.styled';

function App() {
  return (
    <div id="app">
      <Title >CHESS GAME FROM SCTRATCH</Title>
      <Board/>
    </div>
  );
}

export default App;
