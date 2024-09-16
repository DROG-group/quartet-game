import { useEffect, useState } from "react";

export default function PlayerHand({ hand }) {
    // Separate locked cards from unlocked cards
    const [lockedCards, setLockedCards] = useState([])
    const [unlockedCards, setUnlockedCards] = useState([])

    useEffect(() => {
        console.log('player hand', hand);

        setLockedCards(hand.filter(card => card.locked))
        setUnlockedCards(hand.filter(card => !card.locked))
    }, [hand])

    return (
        <div className="">
            <h2 className="text-base-100 mb-3">Player 1:</h2>

            {/* Unlocked cards (normal display) */}
            <div className="grid grid-cols-4 gap-2">
                {unlockedCards.map(card => (
                    <div
                        key={card.id}
                        className="card p-4 rounded-md shadow-md bg-base-content"
                    >
                        <p className="text-sm text-center text-base-100 font-light">{card.name}</p>
                        <p className="text-sm text-center font-semibold text-base-100">{card.category}</p>
                    </div>
                ))}
            </div>

            {/* Locked cards (stacked display) */}
            {lockedCards.length > 0 && (
                <div className="stack mt-4">
                    {lockedCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`bg-blue-100 text-gray-${index + 100}-content grid h-20 w-32 place-content-center rounded shadow-lg`}
                        >
                            <p>{card.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
