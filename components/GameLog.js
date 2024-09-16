import { useEffect, useRef } from "react";

export default function GameLog({ log }) {
    const textareaRef = useRef(null);

    // Scroll to the bottom of the textarea whenever the log updates
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
    }, [log]);

    return (
        <div className="">
            <h2 className="text-base-100 mb-3">Game Log:</h2>
            <textarea
                ref={textareaRef}
                className="textarea textarea-bordered w-full h-40 bg-base-content text-base-100/30 bg-opacity-50 rounded-md italic leading-tight"
                readOnly
                value={log.join('\n')}
            />
        </div>
    );
}
