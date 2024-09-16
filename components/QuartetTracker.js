export default function QuartetTracker({ tracker }) {
    return (
        <div className="quartet-tracker my-4 text-base-100">
            <h2 className="">Stats:</h2>
            <p>Player 1 Quartets: {tracker.player1}</p>
            <p>Player 2 Quartets: {tracker.player2}</p>
        </div>
    );
}
