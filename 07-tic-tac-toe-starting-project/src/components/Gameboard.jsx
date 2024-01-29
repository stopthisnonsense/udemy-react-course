



function Gameboard({onSelectSquare, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameboard)

    // function handleSelectSquare(rowIndex, columnIndex, symbol) {
    //     setGameBoard( (prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map(
    //             innerArray => [...innerArray]
    //         )];
    //         newGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     })
    //     onSelectSquare();
    // }
    return(
        <ol id='game-board'>
            {board.map(
                (row, rowIndex) => {
                    return(
                        <li key={rowIndex}>
                            <ol>
                                {row.map( (playerSymbol, columnIndex) => {
                                    return (
                                        <li key={columnIndex}><button onClick={ () => onSelectSquare(rowIndex, columnIndex)} disabled={playerSymbol !== null ? true : false} >{playerSymbol}</button></li>
                                        //() => handleSelectSquare(rowIndex, columnIndex, playerSymbol)
                                    )
                                } )}
                            </ol>
                        </li>
                     )
                }
             )}
        </ol>
    )
}

export default Gameboard;