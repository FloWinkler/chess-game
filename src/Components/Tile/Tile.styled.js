import styled from 'styled-components';

export const TileWrapper = styled.div`
    display: grid;
    place-content: center;
    width: 6.5vw;
    height: 6.5vw;
    background-color: ${({ darkTile }) => (darkTile ? '#C00000' : '#0070C0')};
    cursor: pointer;
`;

export const PieceIcon = styled.div`
    font-size: 4vw;
`;