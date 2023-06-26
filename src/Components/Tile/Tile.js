import { TileWrapper, PieceIcon } from './Tile.styled';

export default function Tile({ field, piece, index, func, selected }) {

// function tho handle the alternating color pattern
// takes the index of the tile and returns a bool
  const isDarkTile = (index) => {

    // Index to invert the color on row changes
    let caroIndex = Math.ceil((index + 1) / 8)
    
    // Combination of index and caroIndex to get right pattern
    if (index % 2 == 0 && caroIndex % 2 != 0) return false
    else if (index % 2 != 0 && caroIndex % 2 == 0) return false
    else return true
  };
  
  return (
    <TileWrapper
        // Passing a bool to the styled component to decide color
        darkTile={isDarkTile(index)}
        // calling the parents "handleTileClick" function
        // passing the clicked field id (i.e. "a2") as a string
        onClick={() => func(field)}
        // conditional styling to make a selected tile brighter
        style={selected ? {"filter": "brightness(300%)"} : {}}
    >
      {piece && (
        // conditional styling to make a selected piece larger
        <PieceIcon style={selected ? {"transform": "scale(1.1)"} : {}}> 
            {/* rendering a chess piece if the piece prop says so */}
            {piece}
        </PieceIcon>
      )}
    </TileWrapper>
  );
  
}