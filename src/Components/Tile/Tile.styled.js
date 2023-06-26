import styled from 'styled-components';

export const TileWrapper = styled.div`
    display: grid;
    place-content: center;
    width: 5.5vw;
    height: 5.5vw;
    background-color: ${({ darkTile }) => (darkTile ? '#90D8F8' : '#FACAE2')};
    cursor: pointer;
`;

export const PieceIcon = styled.div`
    font-size: 4vw;
`;