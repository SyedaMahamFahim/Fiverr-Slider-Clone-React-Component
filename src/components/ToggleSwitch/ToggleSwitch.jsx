import React from "react";
import './toggleSwitch.css'
const ToggleSwitch = ({ id, text }) => {
  return (
    <>
      <div className="toggleSwitch">
        <div className="toggleSwitch_box">
          <input
            type="checkbox"
            id={id}
            name={id}
            className="toggleSwitch_checkbox"
          />
          <label
          
            htmlFor={id}
            className="toggleSwitch_toggle"
          ></label>
        </div>

        <div className="toggleSwitch_text">{text}</div>
      </div>


    </>
  );
};

export default ToggleSwitch;
