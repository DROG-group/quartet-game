import { useState } from "react";

export default function AttributeSelection({ attributes, onSelect }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {attributes.map((attr, index) => (
                <button
                    key={index} // Use index or better, a unique key
                    className="btn btn-accent"
                    onClick={() => onSelect(attr)} // Call onSelect with the attribute
                >
                    {attr}
                </button>
            ))}
        </div>
    );
}
