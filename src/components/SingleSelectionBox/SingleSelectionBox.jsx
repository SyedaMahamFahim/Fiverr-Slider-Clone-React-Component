import React, { useState, useEffect } from "react";
import "./singleSelectionBox.css";
import Select from "react-select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const SingleSelectionBox = ({ data }) => {
 
  return (
    <>
      <div className="single-selection__sort_box">
        <div>
          <p
            style={{
              color: "#808184",
            }}
          >
            Sort By 
          </p>
        </div>
        <select >
        
            {data.map((val, index) => (
              <option value={val.value} key={index} >
                {val.label}
           
              </option>
            ))}
         
          </select>
        </div>

        
    </>
  );
};

export default SingleSelectionBox;
