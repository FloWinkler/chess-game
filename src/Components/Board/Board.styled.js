import styled from 'styled-components';

export const Title = styled.h1`
    margin: 300px 0px 0px 0px;
    font-size: 3vw;
`;

// Div that wraps everything but the title
export const ChessDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

// The actual Chessboard
export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 6vw);
  grid-template-rows: repeat(8, 6vw);
  width: 48vw;
  height: 48vw;
  border: solid 0.5vw;
  border-radius: 0.4vw;
  border-color: #fde047;
`;

// The graveyards for "killed" pieces
// ! The white one has an inline style to flip the filling direction
export const Graveyard = styled.div`
    display: grid;
    grid-template-columns: 6vw 6vw 6vw 6vw;
    grid-template-rows: 6vw 6vw 6vw 6vw;
    margin: 1vw;
    border: none;
`;

export const KilledPiece = styled.div`
    height: 7vw;
    width: 7vw;
    font-size: 4vw;
`;

