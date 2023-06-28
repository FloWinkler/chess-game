import styled from 'styled-components';

export const TileWrapper = styled.div`
    display: grid;
    place-content: center;
    width: 6vw;
    height: 6vw;
    background-color: ${({ darkTile }) => (darkTile ? '#0ea5e9' : '#ff36f5')};
    cursor: pointer;
`;

export const PieceIcon = styled.div`
    font-size: 4vw;
`;