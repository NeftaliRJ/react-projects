import { useState } from "react";

const TURNS = {
  X: 'X',
  O: 'O',
};

type squareProps = {
  children?: any,
  isSelected?: boolean,
  updateBoard?: any,
  index?: number
}

const Square = ({ children, isSelected, updateBoard, index}: squareProps) => {
  const className = isSelected ? 'square is-selected' : 'square';

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkWinner = (boardToCheck: any) => {
    for(const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null;
  }

  const checkEndGame = (boardToCheck: any) => {
    return boardToCheck.every((square: any) => square != null )
  }
  const updateBoard = (index: number) => {
    if(board[index] || winner ) return;

    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard)

    if(newWinner) {
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false as any)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, i) => (
          <Square key={i} index={i} updateBoard={updateBoard}>
            {board[i]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner ? 'Gano' : 'Empate'
                }
              </h2>
              <header className="win">
                { winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;
