// This represents each square within the board
// It returns a button that upon clicking it will
// call the method passed onto the function (2nd argument)
export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
