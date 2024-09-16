export default function TurnIndicator({ turn }) {
    return (
        <div className="turn-indicator my-4">
            <p className="text-xl text-base-100">It&apos;s {turn === 1 ? "Player 1's" : "Player 2's"} turn</p>
        </div>
    );
}
