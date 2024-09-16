import { VscDebugRestart } from "react-icons/vsc";

export default function GameOverModal({ winner }) {
    return (
        <div className="modal modal-open rounded-xl">
            <div className="modal-box bg-base-content border border-white/10 shadow-lg">
                <h2 className=" font-bold text-base-100">Game Over</h2>
                <p className="text-base-100 font-light text-sm mt-5">{winner}</p>
                <div className="modal-action">
                    <button className="btn btn-primary flex flex-row items-center justify-center" onClick={() => window.location.reload()}>
                        <VscDebugRestart />
                        <span>
                            Play Again
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
