import { useState } from 'react';
import Tile from '../Tile/Tile';
import { BoardWrapper, Graveyard, KilledPiece, ChessDiv } from './Board.styled';
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from 'react-icons/fa';


export default function Board() {
    
    // main object to render the tiles and handle the piece positions
    const [positions, setPositions] = useState({

    // Dark Pieces
    a8: "rook_b"  ,
    b8: "knight_b",
    c8: "bishop_b",
    d8: "queen_b",
    e8: "king_b",
    f8: "bishop_b",
    g8: "knight_b",
    h8: "rook_b",
    a7: "pawn_b",
    b7: "pawn_b",
    c7: "pawn_b",
    d7: "pawn_b",
    e7: "pawn_b",
    f7: "pawn_b",
    g7: "pawn_b",
    h7: "pawn_b",

    // Empty Tiles
    a6: "",
    b6: "",
    c6: "",
    d6: "",
    e6: "",
    f6: "",
    g6: "",
    h6: "",
    a5: "",
    b5: "",
    c5: "",
    d5: "",
    e5: "",
    f5: "",
    g5: "",
    h5: "",
    a4: "",
    b4: "",
    c4: "",
    d4: "",
    e4: "",
    f4: "",
    g4: "",
    h4: "",  
    a3: "",
    b3: "",
    c3: "",
    d3: "",
    e3: "",
    f3: "",
    g3: "",
    h3: "",  

    // Light Pieces
    a2: "pawn_w",
    b2: "pawn_w",
    c2: "pawn_w",
    d2: "pawn_w",
    e2: "pawn_w",
    f2: "pawn_w",
    g2: "pawn_w",
    h2: "pawn_w",
    a1: "rook_w",
    b1: "knight_w",
    c1: "bishop_w",
    d1: "queen_w",
    e1: "king_w",
    f1: "bishop_w",
    g1: "knight_w",
    h1: "rook_w"
    });
    // stateful variable to handle selected pieces
    const [selected, setSelected] = useState(null)
    // array to hold all killed pieces
    const [killed, setKilled] = useState([])
    

    const handleTileClick = (field) => {
        // if nothing is currently selected, select the clicked field
        if (!selected) {if (positions[field]) setSelected(field)}
        // option to unselect a piece, by clicking on it again
        else if (selected == field) (setSelected(null))
        // all other cases (moving a piece)
        else {
            // Putting the killed piece into the killed array
            killed.push(positions[field])
            // updating the positions object
            setPositions({
                // spread operator to get the current object contents
                ...positions,
                // putting the selected piece into the now clicked field
                [field]: positions[selected],
                // emptying the old location of the moved piece
                [selected]: ""
            })
            setSelected(null)
            console.log(positions)
        }
    }

    // function to render piece icons
    const getPieceIcon = (piece, color) => {
        
        
        switch (piece) {
            case "rook_b":
                return <FaChessRook />;
            case "knight_b":
                return <FaChessKnight />;
            case "bishop_b":
                return <FaChessBishop />;
            case "queen_b":
                return <FaChessQueen />;
            case "king_b":
                return <FaChessKing />;
            case "pawn_b":
                return <FaChessPawn/>;
                case "rook_w":
                return <FaChessRook style={{"color": "white"}}/>;
            case "knight_w":
                return <FaChessKnight style={{"color": "white"}}/>;
            case "bishop_w":
                return <FaChessBishop style={{"color": "white"}}/>;
            case "queen_w":
                return <FaChessQueen style={{"color": "white"}}/>;
            case "king_w":
                return <FaChessKing style={{"color": "white"}}/>;
            case "pawn_w":
                return <FaChessPawn style={{"color": "white"}}/>;
        
        }
    }

    return (<>
        <ChessDiv>
            {/* Area for killed white pieces */}
            {/* Inline style to flip the grid filling direction */}
            <Graveyard style={{transform: "scaleX(-1)"}}>
                {/* Rendering a piece if it is inside the "killed" array */}
                {killed.map((piece, index) =>
                    // check if the piece is white
                    piece.at(-1) == "w" ? <KilledPiece key={index}>{getPieceIcon(piece)}</KilledPiece> : null
                )}
            </Graveyard>
            {/* The actual Chessboard */}
            <BoardWrapper>{Object.entries(positions).map(([field, piece], index) => 
                // Rendering one tile per key-value pair in positions
                // field = i.e. a2 or b4
                // piece = i.e. "king_b" or ""
                <Tile
                    key={field}
                    index={index}
                    field={field}
                    piece={getPieceIcon(piece)}
                    func={handleTileClick}
                    selected={selected == field ? true : false}
                />
            )}
            </BoardWrapper>
                

            {/* Area for killed black pieces */}
            <Graveyard>
                {/* Rendering a piece if it is inside the "killed" array */}
                {killed.map((piece, index) =>
                    // check if the piece is white
                    piece.at(-1) == "b" ? <KilledPiece key={index}>{getPieceIcon(piece)}</KilledPiece> : null
                )}
            </Graveyard>
        </ChessDiv>
    </>)
}