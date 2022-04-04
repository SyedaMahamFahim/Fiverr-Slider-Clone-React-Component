import React from "react";
import "./singleSelectionBox.css";

const SingleSelectionBox = ({ data }) => {
  return (
    <>
      <div className="single-selection__sort_box">
        <div><p style={{
          color:"#808184"
        }}>
        Sort By
          </p></div>
        <div>
          <select>
            {data.map((val, index) => (
              <option value={val.value} key={index}>
                {val.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SingleSelectionBox;
