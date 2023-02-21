const Square = ({ id, player }) => {
    const [color, setColor] = React.useState("green");
    const palet = ["red", "blue", "green"];
    const getRandomColor = () => palet[Math.floor(Math.random() * 3)];
    React.useEffect(() => {
        console.log(`Render ${id}`);
        return () => console.log(`unmounting Square ${id}`);
    });

    // keep track of state of the Square
    return (
        // change color of Square on click
        <button onClick={e => {
            setColor(getRandomColor());
            e.target.style.background = color;
        }}
        >
            <h1>{id}</h1>
        </button>
    );
};

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mounted, setMounted] = React.useState(true);
    const [random, setRandom] = React.useState(0);
    let status = `Player ${player}`;
    const toggle = () => setMounted(!mounted);
    const reRender = () => setRandom(Math.random());

    function renderSquare(i) {
        return <Square id={i} player={player}></Square>;
    }
    return (
        <div className="game-board">
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            <div id="info">
                <button onClick={toggle}>Show/Hide Row</button>
                <button onClick={reRender}>Re-Render</button>
                <h1> Turn of player {player} </h1>
            </div>
        </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
