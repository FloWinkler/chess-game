import styled from 'styled-components';

export const TileWrapper = styled.div`
    display: grid;
    place-content: center;
    width: 6vw;
    height: 6vw;
    background-color: ${({ darkTile }) => (darkTile ? '#11cef0' : '#ff5af7')};
    cursor: pointer;
`;

export const PieceIcon = styled.div`
    font-size: 4vw;
`;