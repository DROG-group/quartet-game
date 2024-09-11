import React from 'react';

function Stats({ cardNo }) {
    return (
        <div className=" bg-base-content text-base-100 relative bg-opacity-80 rounded-md p-3 mt-3">
            <span className="uppercase font-semibold text-sm opacity-90">Your cards: {cardNo}</span>
        </div>
    );
}

export default Stats;