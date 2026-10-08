import React from 'react';

const Btn = ({ text, bg, color, setColor }) => {
    return (
        <button
            className="outline-none px-4 py-1 rounded-full border border-gray-500 cursor-pointer"
            style={{ backgroundColor: bg, color: color }}
            onClick={() => setColor(bg)}
        >{text}</button>
    )
}

export default Btn