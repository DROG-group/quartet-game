import { CARD_ATTRIBUTE_LIST } from "@/game.config";

export default function Card({ title, category, attributes, example, isPlayerTurn, player }) {
    return (
        <div className='card w-full bg-base-content text-base-100 relative bg-opacity-80 pb-2'>
            <div className={` transition-all duration-1000 ${isPlayerTurn ? 'opacity-100' : 'opacity-50 blur-lg pointer-events-none'
                }`}>
                <div
                    className={`card-body p-4`}
                >
                    <h2 className="card-title text-xl font-bold ">{title}</h2>
                    <p className="text-sm mb-2 uppercase font-bold tracking-widest opacity-50">{category}</p>
                    <p className="text-sm font-light">{example}</p>
                    <hr className='divider mt-5' />
                    <div className="grid grid-cols-2 gap-4">
                        {attributes && attributes.map((attr, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl font-bold">{attr.score}</span> {/* Larger score */}
                                <span className="text-sm opacity-50 font-extralight">{CARD_ATTRIBUTE_LIST[attr.index]}</span> {/* Smaller attribute name */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {!isPlayerTurn && (
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center rounded-md">
                    <p className="uppercase tracking-widest">{player === 1 ? 'Player 2' : 'Player 1'}&apos;s Turn</p>
                </div>
            )}
        </div>
    );
}
