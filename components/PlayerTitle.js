import React from 'react';

function PlayerTitle({ text }) {
    return (
        <h3 className="text-base-100/80 text-2xl mb-3 uppercase font-semibold text-center">{text}</h3>
    );
}

export default PlayerTitle;