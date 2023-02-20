const Square = () => {
    return <button> </button>;
};

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    let status = `Player ${player}`;
    function rednerSquare(i) {
        return <Square></Square>;
    }
    return (
        <div className="game-board">
            <div className="grid-row">
            {rednerSquare(0)}
            {rednerSquare(1)}
            {rednerSquare(2)}
            </div>
            <div id="info">
                <h1> {status} </h1>
            </div>
        </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
