// src/components/user_side/js/Options.js
import React from "react";

const Options = ({ options, selected, onSelect }) => {
  return (
    <div className="options">
      {options.map((opt, i) => (
        <label key={i}>
          <input
            type="radio"
            name="option"
            checked={selected === i}
            onChange={() => onSelect(i)}
          />
          {String.fromCharCode(65 + i)}. {opt}
        </label>
      ))}
    </div>
  );
};

export default Options;