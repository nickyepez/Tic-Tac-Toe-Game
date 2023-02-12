const Board = () => {
    const [player, setPlayer] = React.useState(1);
    let status = `Player ${player}`;
    return (
        <div
            className="game-board"
            onClick={e => {
                setPlayer((player + 1) % 2); //the player needs to be 0 or 1
                status = `Player ${player}`;
                e.target.style.background = "red";
                e.target.style.width = 600;
            }}
        >
            <div id="info">
                <h1>{status}</h1>
            </div>
        </div>
    );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
