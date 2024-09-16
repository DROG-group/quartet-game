export default function OpponentHand({ handLength }) {
    return (
        <div className="">
            <h2 className="text-base-100 mb-3">Player 2:</h2>

            {handLength === 0 ? (
                <p className="text-center text-base-100 italic">No cards left</p>
            ) : (
                <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: handLength }, (_, i) => (
                        <div key={i} className="card p-4 text-base-100 rounded-md bg-base-content">
                            <p className="text-center text-sm italic font-light">Hidden Card</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
